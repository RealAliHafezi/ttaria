import { configureStore } from "@reduxjs/toolkit";
import HeaderReducer from "../sections/Header/HeaderSlice";
import ProductReducer from "./productsSlice";
export const store = configureStore({
  reducer: {
    ResponsiveMenu: HeaderReducer,
    Product: ProductReducer,
  },
});
