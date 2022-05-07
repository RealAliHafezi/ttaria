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
    handleFadeInOut: (state) => {
      state.FadeOut = false;
    },
    handleFadeOutIn: (state) => {
      state.FadeIn = true;
    },
    handleFadeInOut2: (state) => {
      state.FadeOut = false;
    },
    handleFadeOutIn2: (state) => {
      state.FadeIn = true;
    },
  },
});

export const {
  handleShow: ShowMenu,
  handleHide: HideMenu,
  handleFadeInOut,
  handleFadeOutIn,
  handleFadeOutIn2,
  handleFadeInOut2,
} = HeaderSlice.actions;
export default HeaderSlice.reducer;
