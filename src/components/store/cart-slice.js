import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalAmount: 0,
  totalQuantity: 0,
  isCart: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);
      if (existingItem) {
        existingItem.quantity = existingItem.quantity + newItem.quantity;
        existingItem.totalPrice += newItem.price * newItem.quantity;
      } else {
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          size: newItem.size,
          price: newItem.price,
          quantity: newItem.quantity,
          image: newItem.image,
          totalPrice: newItem.price * newItem.quantity,
        });
      }
      state.totalQuantity = state.totalQuantity + newItem.quantity;
      state.totalAmount = state.totalAmount + newItem.price * newItem.quantity;
      state.isCart = true;
    },
    addQuantityItemToCart(state, action) {
      const newItem = action.payload;
      state.totalAmount += newItem.price;
      state.totalQuantity++;
      const existingItem = state.items.find(item => item.id === newItem.id);
      existingItem.quantity++;
      existingItem.totalPrice += newItem.price;
    },
    removeQuantityItemToCart(state, action) {
      const id = action.payload;
      state.totalQuantity--;
      const existingItem = state.items.find(item => item.id === id);
      if (existingItem.quantity === 1) {
        state.items = state.items.filter(item => item.id !== id);
        if (state.items.length === 0) {
          state.isCart = false;
        }
      } else {
        state.totalAmount -= existingItem.price;
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
    removeItemToCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      state.totalAmount -= existingItem.totalPrice;
      state.totalQuantity -= existingItem.quantity;
      state.items = state.items.filter(item => item.id !== id);
      if (state.items.length === 0) {
        state.isCart = false;
      }
    },
    changeQuanityToCart(state, action) {
      const id = action.payload.id;
      const quantityItem = action.payload.quantity;
      const existingItem = state.items.find(item => item.id === id);
      existingItem.quantity = quantityItem;
      existingItem.totalPrice = quantityItem * existingItem.price;
      state.totalAmount = state.items.reduce(
        (sum, item) => sum + item.totalPrice,
        0
      );
      state.totalQuantity = state.items.reduce(
        (sum, item) => sum + item.quantity,
        0
      );
    },
    resetCart(state) {
      state = initialState;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
