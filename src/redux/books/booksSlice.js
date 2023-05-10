import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [
    {
      item_id: 'item1',
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
    },
    {
      item_id: 'item2',
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
    },
    {
      item_id: 'item3',
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
    },
  ],
};

const booksSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push({
        item_id: action.item_id,
        title: action.title,
        author: action.author,
        category: action.category,
      });
    },
    delBook: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.books = state.books.filter(
        (book) => book.item_id !== action.payload,
      );
    },
  },
});

export const { addBook, delBook } = booksSlice.actions;
export default booksSlice.reducer;
