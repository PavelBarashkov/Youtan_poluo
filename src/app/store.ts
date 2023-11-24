import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import cardsSlice from "../modules/MainCollection/store/slice/cardsSlice";
import allCardsSlice from "../modules/Shope/store/slice/allCardsSlice";
import typesSlice from "../modules/Shope/store/slice/TypesSlice";

export const store = configureStore({
  reducer: {
    cardsFavorite: cardsSlice,
    allCards: allCardsSlice,
    types: typesSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
