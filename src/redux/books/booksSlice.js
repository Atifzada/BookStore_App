import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/xGOGpkgr9AZUvoceEaCM/books';
const initialState = {
  books: [],
  isLoading: Boolean,
  error: undefined,
};

const getData = createAsyncThunk('get', async () => {
  const get = await axios.get(BASE_URL);
  return get.data;
});

const postData = createAsyncThunk('post', async (payload) => {
  const post = await axios.post(BASE_URL, payload);
  return post.data;
});

const delData = createAsyncThunk('delete', async (payload) => {
  const remove = await axios.delete(`${BASE_URL}/${payload}`);
  return remove.data;
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
  newReducers: (creater) => {
    creater.newCase(getData.pending, (state) => {
      state.isLoading = true;
    });
    creater.newCase(getData.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.books = Object.entries(payload).flatMap(([key, value]) => value.map((book) => ({
        ...book, item_id: key, progress: 80,
      })));
    });
    creater.newCase(getData.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    creater.newCase(postData.fulfilled, (state) => {
      state.isLoading = false;
    });
    creater.newCase(delData.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    creater.newCase(delData.fulfilled, (state) => {
      state.isLoading = false;
    });
    creater.newCase(delData.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export { getData, postData, delData };
export const { addBook, delBook } = booksSlice.actions;
export default booksSlice.reducer;
