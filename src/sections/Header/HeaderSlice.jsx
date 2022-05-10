import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // for HeaderBottomRightMenu.jsx file
  ResponsiveMenu: false,
  //   for HeaderBottom.jsx file
  FadeIn: false,
  FadeOut: false,
};

const HeaderSlice = createSlice({
  name: "Header",
  initialState,
  reducers: {
    handleShow: (state) => {
      state.ResponsiveMenu = true;
    },
    handleHide: (state) => {
      state.ResponsiveMenu = false;
    },
  },
});

export const { handleShow: ShowMenu, handleHide: HideMenu } =
  HeaderSlice.actions;
export default HeaderSlice.reducer;
