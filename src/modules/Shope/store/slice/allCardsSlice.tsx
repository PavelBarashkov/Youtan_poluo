import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCards } from "../../API/fetchCards";

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
  typeId?: number;
  bySort: string;
  page: number;
  loading: boolean;
  error: string;
}

const initialState: CardsState = {
  cards: [],
  page: 1,
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

export const allCardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    setTypeId: (state, action) => {
      state.typeId = action.payload;
    },
    setBySort: (state, action) => {
      state.bySort = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCard.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(fetchCard.fulfilled, (state, action) => {
        state.cards = action.payload.rows;
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

export const { setTypeId, setBySort } = allCardsSlice.actions;
export default allCardsSlice.reducer;
