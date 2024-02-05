import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemsList: [],
    totalQuantity: 0,
  },
  reducers: {
    addToCart(state: any, action) {
      const newItem = action.payload;
      //check if item is already exists
      const existingItem = state.itemsList.find((item: any) => item.id === newItem.id);
      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice +=
          newItem.price - Math.round((newItem.price * newItem.discount) / 100);
      } else {
        state.itemsList.push({
          id: newItem.id,
          name: newItem.name,
          image: newItem.image,
          price: newItem.price,
          discount: newItem.discount,
          totalPrice: newItem.price - Math.round((newItem.price * newItem.discount) / 100),
          quantity: 1,
        });

        state.totalQuantity++;
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
