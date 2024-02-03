import { createSlice } from "@reduxjs/toolkit"

const cardSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {

    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cart.find((item) => item.id === newItem.id);

      if (existingItem) {
        existingItem.qty += 1;
      } else {
        state.cart.push({ ...newItem, qty: 1 });
      }
    },

    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },

    incrementQuantity: (state, action) => {
        const item = state.cart.find(item => item.id === action.payload.id);
        if (item) item.qty += 1;
      },
      
    decrementQuantity: (state, action) => {
        const item = state.cart.find(item => item.id === action.payload.id);
        if (item && item.qty > 0) item.qty -= 1;
      }
      
  },
});

export const { addToCart, removeFromCart , incrementQuantity , decrementQuantity} = cardSlice.actions;
export default cardSlice.reducer;
