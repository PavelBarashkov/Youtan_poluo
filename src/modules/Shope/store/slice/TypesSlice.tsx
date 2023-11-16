import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchCards } from "../../API/fetchCards";
import { fetchTypes } from "../../API/fetchTypes";

interface IType {
  id?: number;
  name?: string;
  createdAt?: string;
  updatedAt?: string;
}

interface TypesState {
  types?: IType[];
  loading: boolean;
  error: string;
}

const initialState: TypesState = {
  types: [],
  loading: false,
  error: "",
};

export const getTypes = createAsyncThunk("types/getTypes", async () => {
  try {
    const response = await fetchTypes();
    return response.data;
  } catch (e) {
    console.log(e);
  }
});

export const typesSlice = createSlice({
  name: "types",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTypes.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(getTypes.fulfilled, (state, action) => {
        state.types = action.payload;
        state.loading = false;
        state.error = "";
      })
      .addCase(getTypes.rejected, (state, action) => {
        console.log("Error:", action.payload);
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const {} = typesSlice.actions;
export default typesSlice.reducer;
