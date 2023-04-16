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
            const existingItem = state.items.find(
                item => item.id === newItem.id && item.size === newItem.size
            );
            if (existingItem) {
                existingItem.quantity =
                    existingItem.quantity + newItem.quantity;
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
            state.totalAmount =
                state.totalAmount + newItem.price * newItem.quantity;
            state.isCart = true;
        },
        addQuantityItemToCart(state, action) {
            const newItem = action.payload;
            state.totalAmount += newItem.price;
            state.totalQuantity++;
            const existingItem = state.items.find(
                item => item.id === newItem.id && item.size === newItem.size
            );
            existingItem.quantity++;
            existingItem.totalPrice += newItem.price;
        },
        removeQuantityItemToCart(state, action) {
            const newItem = action.payload;
            console.log(newItem);
            state.totalQuantity--;
            const existingItem = state.items.find(
                item => item.id === newItem.id && item.size === newItem.size
            );
            if (existingItem.quantity === 1) {
                state.items = state.items.filter(
                    item => item.id !== newItem.id || item.size !== newItem.size
                );
                if (state.items.length === 0) {
                    state.isCart = false;
                }
            } else {
                state.totalAmount -= existingItem.price;
                existingItem.quantity--;
                existingItem.totalPrice =
                    existingItem.totalPrice - existingItem.price;
            }
        },
        removeItemToCart(state, action) {
            const newItem = action.payload;
            // const id = action.payload;
            const existingItem = state.items.find(
                item => item.id === newItem.id && item.size === newItem.size
            );
            state.totalAmount -= existingItem.totalPrice;
            state.totalQuantity -= existingItem.quantity;
            state.items = state.items.filter(
                item => item.id !== newItem.id || item.size !== newItem.size
            );
            if (state.items.length === 0) {
                state.isCart = false;
            }
        },
        changeQuanityToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find(
                item => item.id === newItem.id && item.size === newItem.size
            );
            existingItem.quantity = newItem.quantity;
            existingItem.totalPrice = newItem.quantity * existingItem.price;
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
            state.items = [];
            state.totalQuantity = 0;
            state.totalPrice = 0;
            state.isCart = false;
        },
    },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
