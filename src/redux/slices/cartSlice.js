import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    // add to cart
    addToCart: (state, action) => {
      const existingProduct = state.find((item) => item.id === action.payload.id);
      if (existingProduct) {
        existingProduct.quantity += 1;
        existingProduct.totalPrice = existingProduct.quantity * existingProduct.price;
      } else {
        state.push({
          ...action.payload,
          quantity: 1,
          totalPrice: action.payload.price,
        });
      }
    },
    // remove item from cart
    removeCartItem: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    // increment item quantity
    incrementCartItem: (state, action) => {
      const existingProduct = state.find((item) => item.id === action.payload);
      if (existingProduct) {
        existingProduct.quantity += 1;
        existingProduct.totalPrice = existingProduct.quantity * existingProduct.price;
      }
    },
    // decrement item quantity
    decrementCartItem: (state, action) => {
      const existingProduct = state.find((item) => item.id === action.payload);
      if (existingProduct && existingProduct.quantity > 1) {
        existingProduct.quantity -= 1;
        existingProduct.totalPrice = existingProduct.quantity * existingProduct.price;
      }
    },
    // empty cart
    emptyCart: () => {
      return [];
    },
  },
});

export const {
  addToCart,
  removeCartItem,
  incrementCartItem,
  decrementCartItem,
  emptyCart,
} = cartSlice.actions;

export default cartSlice.reducer;
