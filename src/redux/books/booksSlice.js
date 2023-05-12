import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/AL3jlDWauW8xqK5fxtQG/books';
const initialState = {
  books: [],
  isLoading: false,
  error: undefined,
};

const getData = createAsyncThunk('get/book', async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
});

const postData = createAsyncThunk('post', async (payload) => {
  const response = await axios.post(BASE_URL, payload);
  return response.data;
});

const delData = createAsyncThunk('delete', async (payload) => {
  const response = await axios.delete(`${BASE_URL}/${payload}`);
  return response.data;
});

const booksSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, { payload }) => {
      state.books.push({
        item_id: payload.item_id,
        title: payload.title,
        author: payload.author,
        category: payload.category,
      });
    },
    delBook: (state, action) => {
      state.books = state.books.filter(
        (book) => book.item_id !== action.payload,
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getData.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.books = Object.entries(payload).flatMap(([key, value]) => value.map((data) => ({
          ...data,
          item_id: key,
          title: data.title,
          author: data.author,
          progress: 50,
        })));
      })
      .addCase(getData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(postData.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(delData.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(delData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export { getData, postData, delData };
export const { addBook, delBook } = booksSlice.actions;
export default booksSlice.reducer;
