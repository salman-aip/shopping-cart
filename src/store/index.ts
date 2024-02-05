import cartSlice from "@/redux/cartSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

export default store;
