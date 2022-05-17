import { createSlice } from "@reduxjs/toolkit";
import { MobileData } from "../data/Mobile/AllMobileData";
const ProductSlice = createSlice({
  name: "Product",
  initialState: {
    favorite: [],
  },
  reducers: {
    addToFavorite: (state, action) => {
      const addItem = MobileData.filter(
        (item) => item.productId === action.payload
      );
      state.favorite.push(addItem);
    },
    removerFromFavorite: (state, action) => {
      const removeItem = MobileData.filter(
        (item) => item.productId !== action.payload
      );
      state.favorite.push(removeItem);
    },
  },
});
export const { addToFavorite, removerFromFavorite } = ProductSlice.actions;
export default ProductSlice.reducer;
