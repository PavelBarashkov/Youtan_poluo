import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCards } from "../../API/fetchCards";

interface CardsState {
  cards?: {
    cardId?: number;
    modelId?: number;
    name?: string;
    price?: number;
    colors?: string[];
    sizes?: string[];
    imgs?: string[];
  };
  typeId?: number;
  page: number;
  loading: boolean;
  error: string;
}

const initialState: CardsState = {
  cards: {},
  page: 1,
  loading: false,
  error: "",
};

interface fecthCardsProps {
  typeId?: number;
  page: number;
  limit?: number;
}

export const fetchCard = createAsyncThunk(
  "cars/fetchCards",
  async (params: fecthCardsProps) => {
    const { typeId, page, limit } = params;
    try {
      const response = await fetchCards(typeId, page, limit);
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

export const { setTypeId } = allCardsSlice.actions;
export default allCardsSlice.reducer;
