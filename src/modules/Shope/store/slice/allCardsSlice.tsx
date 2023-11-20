import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCards } from "../../API/fetchCards";
import { getPageCount } from "../../../helpers/pages";

interface ICard {
  cardId?: number;
  modelId?: number;
  name?: string;
  price?: number;
  colors?: string[];
  sizes?: string[];
  imgs?: string[];
}

interface CardsState {
  cards: ICard[];
  typeId?: number[];
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
  limit: 1,
  typeId: [],
  bySort: "default",
  loading: false,
  error: "",
};

interface fecthCardsProps {
  typeId?: number;
  bySort: string;
  page: number;
  limit?: number;
}

export const fetchCard = createAsyncThunk(
  "cars/fetchCards",
  async (params: fecthCardsProps) => {
    const { typeId, bySort, page, limit } = params;
    try {
      const response = await fetchCards(typeId, bySort, page, limit);
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }
);
const params = (arr: any, number: any) => {
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
      params(state.typeId, action.payload);
    },
    setBySort: (state, action) => {
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
        const newCards = action.payload.rows;

        const duplicateCheck = newCards.some((newCard: any) =>
          state.cards.some(
            (existingCard) => existingCard.modelId === newCard.modelId
          )
        );

        if (!duplicateCheck) {
          state.cards = state.cards.concat(newCards);
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
