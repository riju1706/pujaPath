import { createSlice } from "@reduxjs/toolkit";

const vendorSlice = createSlice({
  name: "cart",
  initialState: {},
  reducers: {
    vendorAndSamagriAction: (state, action) => {
      return action.payload;
    },
    AddVendorAndSamagriAction: (state, action) => {
      state.samagriList.push(action.payload);
    },
    // removeToCart: (state, action) => {
    //   const itemIdToRemove = action.payload;
    //   state.items = state.items.filter(
    //     (item) => item.user.id !== itemIdToRemove
    //   );
    // },
    // editDateCart: (state, action) => {
    //   const { index, DateTime } = action.payload;
    //   state.items[index].DateTime = DateTime;
    // },
  },
});
export const { vendorAndSamagriAction, AddVendorAndSamagriAction } =
  vendorSlice.actions;
export default vendorSlice.reducer;
