import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCards } from "../../API/fetchCards";
import { getPageCount } from "../../../helpers/pages";
import { IType } from "../../interfaces/IType";

interface ICard {
  cardId: number;
  modelId: number;
  name: string;
  price: number;
  colors: string[];
  sizes: string[];
  imgs: string[];
}

interface CardsState {
  cards: ICard[];
  typeId: IType[];
  bySort: string;
  page: number;
  limit: number;
  totalPages: number;
  loading: boolean;
  error: string;
}

const initialState: CardsState = {
  cards: [],
  page: 1,
  totalPages: 0,
  limit: 9,
  typeId: [],
  bySort: "default",
  loading: false,
  error: "",
};

interface fetchCardsProps {
  bySort: string;
  page: number;
  typeId?: number;
}

export const fetchCard = createAsyncThunk(
  "cars/fetchCards",
  async (params: fetchCardsProps) => {
    const { bySort, page, typeId } = params;
    try {
      const response = await fetchCards(bySort, page, typeId);
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }
);

const params = (arr: IType[], number: any) => {
  if (arr.includes(number)) {
    return arr.splice(arr.indexOf(number), 1);
  }
  arr.push(number);
};

export const allCardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    setTypeId: (state, action) => {
      state.page = 1;
      state.totalPages = 0;
      state.cards = [];
      params(state.typeId, action.payload);
    },
    setBySort: (state, action) => {
      state.page = 1;
      state.totalPages = 0;
      state.cards = [];
      state.bySort = action.payload;
    },
    setPage: (state) => {
      state.page = state.page + 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCard.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(fetchCard.fulfilled, (state, action) => {
        if (state.page === 1) {
          state.cards = action.payload.rows;
        } else {
          state.cards = [...state.cards, ...action.payload.rows];
        }
        const totalCount = action.payload.count;
        state.totalPages = getPageCount(totalCount, state.limit);
        state.loading = false;
        state.error = "";
      })
      .addCase(fetchCard.rejected, (state, action) => {
        console.log("Error:", action.payload);
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setTypeId, setBySort, setPage } = allCardsSlice.actions;
export default allCardsSlice.reducer;
