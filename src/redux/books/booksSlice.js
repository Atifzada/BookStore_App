import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
};

const booksSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push({
        bookId: action.bookId,
        title: action.title,
        author: action.author,
        category: action.category,
      });
    },
    delBook: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.books = state.books.filter(
        (book) => book.itemId !== action.payload,
      );
    },
  },
});

export const { addBook, delBook } = booksSlice.actions;
export default booksSlice.reducer;
