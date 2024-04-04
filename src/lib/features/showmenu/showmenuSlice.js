import { createSlice } from "@reduxjs/toolkit";

const showmenuSlice = createSlice({
  name: "showmenu",
  initialState: { value: false },
  reducers: {
    toggleShowMenu: (state) => {
      state.value = !state.value;
    },
  },
});

export const { toggleShowMenu } = showmenuSlice.actions;
export default showmenuSlice.reducer;
