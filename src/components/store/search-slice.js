import { createSlice } from '@reduxjs/toolkit';

const initialSearch = {
  valueSearch: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState: initialSearch,
  reducers: {
    setValueSearch(state, action) {
      const value = action.payload;
      state.valueSearch = value;
    },
  },
});

export const searchActions = searchSlice.actions;

export default searchSlice.reducer;
