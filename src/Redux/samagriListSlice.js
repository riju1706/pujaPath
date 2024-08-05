import { createSlice } from "@reduxjs/toolkit";

const samagriSlice = createSlice({
  name: "samagriSlice",
  initialState: {},
  reducers: {
    samagriAction: (state, action) => {
      return action.payload;
    },
  },
});

export const { samagriAction } = samagriSlice.actions;
export default samagriSlice.reducer;
