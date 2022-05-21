import { createSlice } from "@reduxjs/toolkit";
import { MobileData } from "../data/Mobile/AllMobileData";
const ProductSlice = createSlice({
  name: "Product",
  initialState: {
    favorite: [],
    like: false,
  },
  reducers: {
    addToFavorite: (state, action) => {
      let Item = MobileData.find(
        (item) => item.productId === action.payload.ID
      );
      state.favorite.push(Item);
      const newState = JSON.stringify(state.favorite);
      localStorage.setItem("favoriteProducts", newState);
    },
    removerFromFavorite: (state, action) => {
      const newState = state.favorite.filter(
        (item) => item.productId !== action.payload.ID
      );
      state.favorite = newState;
      const newStateJSON = JSON.stringify(state.favorite);
      localStorage.setItem("favoriteProducts", newStateJSON);
    },
  },
});
export const { addToFavorite, removerFromFavorite } = ProductSlice.actions;
export default ProductSlice.reducer;
