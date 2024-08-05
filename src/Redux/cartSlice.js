import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.items[0] = action.payload;
      // return action.payload;
    },
    removeToCart: (state, action) => {
      const itemIdToRemove = action.payload;
      state.items = state.items.filter(
        (item) => item.user.id !== itemIdToRemove
      );
    },
    editDateCart: (state, action) => {
      const { index, DateTime } = action.payload;
      state.items[index].DateTime = DateTime;
    },
  },
});
export const { addToCart, removeToCart, editDateCart } = cartSlice.actions;
export default cartSlice.reducer;
