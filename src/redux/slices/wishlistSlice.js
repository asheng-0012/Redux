import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: [],
  reducers: {
    // add to wishlist
    addToWishlist: (state, action) => {
      state.push(action.payload);
    },
    // alias for backward compatibility
    addTOWsihlist: (state, action) => {
      state.push(action.payload);
    },
    // remove from wishlist
    removeFromWishlist: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToWishlist, addTOWsihlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;