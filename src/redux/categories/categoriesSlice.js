import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    status: () => 'In progress',
  },
});

export const { status } = categorySlice.actions;

export default categorySlice.reducer;
