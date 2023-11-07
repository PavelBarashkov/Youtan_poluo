import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchCards } from '../../API/fetchCards';

interface Image {
    url: string; 
    id: number; 
}

interface Size {
    name: string; 
    id: number;
}

interface Product {
    id: number;
    modelId: number; 
    compound: string;
    createdAt: string; 
    updatedAt: string; 
    sizes: Size[];
}

interface ModelProduct {
    id: number;
    cardId: number; 
    color: string;
    description: string; 
    createdAt: string; 
    updatedAt: string; 
    productId: number; 
    images: Image[]; 
    product: Product; 
}

interface MainProduct {
    id?: number; 
    name?: string;
    price?: number; 
    favorite?: boolean; 
    createdAt?: string; 
    updatedAt?: string; 
    "model-products"?: ModelProduct[]; 
}
interface CardsState {
    cards: MainProduct,
    loading: boolean,
    error: string,
}

const initialState: CardsState = {
    cards: {},
    loading: false,
    error: ''
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