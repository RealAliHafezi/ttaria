import { configureStore } from "@reduxjs/toolkit";
import HeaderSlice from "../sections/Header/HeaderSlice";

export const store = configureStore({
  reducer: {
    ResponsiveMenu: HeaderSlice,
  },
});
