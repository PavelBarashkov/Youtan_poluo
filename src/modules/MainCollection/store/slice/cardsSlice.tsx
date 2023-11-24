import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchCards } from "../../API/fetchCards";

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
  loading: boolean;
  error: string;
}

const initialState: CardsState = {
  cards: [],
  loading: false,
  error: "",
};

export const fetchCard = createAsyncThunk("cars/fetchCards", async () => {
    const response = await fetchCards();
    return response.data;
  
});

export const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCard.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(fetchCard.fulfilled, (state, action) => {
        state.cards = action.payload;
        state.loading = false;
        state.error = "";
      })
      .addCase(fetchCard.rejected, (state, action) => {
        console.log("Error:", action.payload);
        state.loading = false;

        if (action.payload instanceof Error) {
          state.error = action.payload.message;
        } else if (typeof action.payload === "string") {
          try {
            const errorData = JSON.parse(action.payload);
            if (errorData.message) {
              state.error = errorData.message;
            } else {
              state.error = "Произошла ошибка при загрузке.";
            }
          } catch (error) {
            state.error = "Произошла ошибка при загрузке.";
          }
        } else {
          state.error = "Произошла ошибка при загрузке.";
        }
      });
  },
});

export const {} = cardsSlice.actions;
export default cardsSlice.reducer;
