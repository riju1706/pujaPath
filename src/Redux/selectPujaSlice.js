// selectPujaSlice.js
import { createSlice } from "@reduxjs/toolkit";

const selectPujaSlice = createSlice({
  name: "selectPuja",
  initialState: { selectedPuja: "" },
  reducers: {
    selectPujaAction: (state, action) => {
      state.selectedPuja = action.payload;
    },
  },
});

export const { selectPujaAction } = selectPujaSlice.actions; // Exporting action creator
export default selectPujaSlice.reducer; // Exporting reducer
