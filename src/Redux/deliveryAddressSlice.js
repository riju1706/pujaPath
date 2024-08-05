import { createSlice } from "@reduxjs/toolkit";

const deliveryAddressSlice = createSlice({
  name: "deliveryAddressSlice",
  initialState: {},
  reducers: {
    pujaAddressAction: (state, action) => {
      return { ...state, pujaAddress: action.payload };
    },
    samagriAddressAction: (state, action) => {
      return { ...state, samagriAddress: action.payload };
    },
  },
});

export const { pujaAddressAction, samagriAddressAction } =
  deliveryAddressSlice.actions;
export default deliveryAddressSlice.reducer;
