import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import cart from './cart-slice';
import search from './search-slice';

const combineReducer = combineReducers({
  cart,
  search,
});

export const makeStore = () =>
  configureStore({
    reducer: combineReducer,
  });

export const wrapper = createWrapper(makeStore);
