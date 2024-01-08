import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCard } from "../API/getCard";
import { ICardState } from "../interface/ICardState";
import { IGetCardInfoProps } from "../interface/IGetCardInfoProps";

const initialState: ICardState = {
  card: [],
  selected: {
    color: {
      modelId: 0,
      color: "",
    },
    size: {
      id: 0,
      name: "",
    },
  },
  loading: false,
  error: "",
};

export const getCardInfo = createAsyncThunk(
  "card/getCard",
  async (id: number) => {
    const response = await getCard(id);
    return response.data;
  }
);

export const cardSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    setSelectedColor: (state, action) => {
      state.selected.color = action.payload;
    },
    setSelectedSize: (state, action) => {
      state.selected.size = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCardInfo.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(getCardInfo.fulfilled, (state, action) => {
        state.card = action.payload;

        state.selected.color.modelId = action.payload.id;
        state.selected.color.color = action.payload.color;

        state.selected.size.id = action.payload.size[0]?.id;
        state.selected.size.name = action.payload.size[0]?.name;

        state.loading = false;
        state.error = "";
      })
      .addCase(getCardInfo.rejected, (state, action) => {
        console.log("Error:", JSON.stringify(action.payload));
        state.loading = false;
        if (action.error.message === "Request failed with status code 404") {
          state.error = "Продукт не найден";
        } else {
          state.error = action.error.message ?? "Произошла ошибка";
        }
      });
  },
});

export const { setSelectedColor, setSelectedSize } = cardSlice.actions;
export default cardSlice.reducer;
