import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const itemExists = state.find((song) => song.id === action.payload.id);
      if (itemExists) {
        itemExists.quantity++;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementQuantity: (state, action) => {
      const song = state.find((song) => song.id === action.payload);
      song.quantity++;
    },
    decrementQuantity: (state, action) => {
      const song = state.find((song) => song.id === action.payload);
      if (song.quantity === 1) {
        const index = state.findIndex((song) => song.id === action.payload);
        state.splice(index, 1);
      } else {
        song.quantity--;
      }
    },
    removeFromCart: (state, action) => {
      const index = state.findIndex((song) => song.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const cartReducer = cartSlice.reducer;

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} = cartSlice.actions;