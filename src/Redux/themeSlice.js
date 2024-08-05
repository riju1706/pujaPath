import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: "#558b2f",
  reducers: {
    themeAction: (state, action) => {
      return action.payload;
    },
  },
});
export const { themeAction } = themeSlice.actions;
export default themeSlice.reducer;
