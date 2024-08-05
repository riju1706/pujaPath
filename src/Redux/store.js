// store.js
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import userSlice from "./userSlice";
import selectPujaReducer from "./selectPujaSlice"; // Importing reducer
import samagriSlice from "./samagriListSlice";
import vendorSlice from "./vendorSlice";
import deliveryAddressSlice from "./deliveryAddressSlice";
import personalInfoEditSlicejs from "./personalInfoEdit.Slicejs";
import themeSlice from "./themeSlice";

export default configureStore({
  reducer: {
    cart: cartReducer,
    user: userSlice,
    selectPuja: selectPujaReducer, // Using the reducer, not the slice
    samagriList: samagriSlice,
    vandorAndSamagri: vendorSlice,
    deliveryAddres: deliveryAddressSlice,
    personalInfoEdit: personalInfoEditSlicejs,
    themeColor: themeSlice,
  },
});
