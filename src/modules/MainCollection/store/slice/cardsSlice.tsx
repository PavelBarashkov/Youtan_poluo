import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchCards } from '../../API/fetchCards';



interface CardsState {
    cards?: {
        cardId?: number,
        modelId?: number,
        name?: string,
        price?: number,
        colors?: string[],
        sizes?: string[],
        imgs?: string[]
    },
    loading: boolean,
    error: string,
    
}

const initialState: CardsState = {
    cards: {},
    loading: false,
    error: '',
}
  

export const fetchCard = createAsyncThunk(
    'cars/fetchCards',
    async () => {
        try {
            const response = await fetchCards();
            return response.data;
        } catch (e) {
            console.log(e)
        }
    }
  );
  

export const cardsSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchCard.pending, (state) => {
            state.loading = true;
            state.error = '';
        })
        .addCase(fetchCard.fulfilled, (state, action) => {
            state.cards = action.payload;
            state.loading = false;
            state.error = '';
        })
        .addCase(fetchCard.rejected, (state, action) => {
            console.log("Error:", action.payload);
            state.loading = false;
            state.error = action.payload as string;
        });
    }
})

export const { } = cardsSlice.actions;
export default cardsSlice.reducer;