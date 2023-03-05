import { createSlice } from '@reduxjs/toolkit';

const initialState = '';

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilterContact(state, action) {
      return (state = action.payload);
    },
  },
});

export const selectFilters = state => state.filters;
export const { setFilterContact } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
