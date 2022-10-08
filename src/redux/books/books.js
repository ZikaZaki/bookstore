import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// Bookstore API
const apiKey = 'Fbdc45RKcHa3Ou9VViQW';
const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';
const booksURL = `${baseURL}${apiKey}/books/`;

// Actions
const GET_BOOKS = 'bookstore/books/GET_BOOKS';
const ADD_BOOK = 'bookStore/books/ADD';
const UPDATE_BOOK = 'bookStore/books/UPDATE';
const REMOVE_BOOK = 'bookStore/books/REMOVE';

// First, create the thunk for all actions
export const fetchBooks = createAsyncThunk(
  GET_BOOKS,
  async () => {
    try {
      const response = await axios.get(booksURL);
      return response.data;
    } catch (error) {
      return error;
    }
  },
);

export const addBook = createAsyncThunk(
  ADD_BOOK,
  async (payload) => {
    try {
      return await JSON.stringify(axios.post(booksURL, payload));
    } catch (error) {
      return error;
    }
  },
);

export const updateBook = createAsyncThunk(
  UPDATE_BOOK,
  async (payload) => {
    try {
      const response = await axios.put(booksURL, payload);
      return response;
    } catch (error) {
      return error;
    }
  },
);

export const removeBook = createAsyncThunk(
  REMOVE_BOOK,
  async (payload) => {
    try {
      return await JSON.stringify(axios.delete(booksURL + payload));
    } catch (error) {
      return error;
    }
  },
);

// Initial state of the store
const initialState = [];

// Handling actions in the reducers:
export const booksSlice = createSlice({
  name: 'books',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.fulfilled, (state, action) => {
        const books = Object.keys(action.payload).map((key) => {
          const book = action.payload[key][0];
          return {
            id: key,
            ...book,
          };
        });
        return books;
      })
      .addCase(addBook.fulfilled, (state, action) => {
        const book = {
          id: action.meta.arg.item_id,
          title: action.meta.arg.title,
          author: action.meta.arg.author,
          category: action.meta.arg.category,
        };
        return [...state, book];
      })
      .addCase(updateBook.fulfilled, (state, action) => [...state, action.payload])
      .addCase(removeBook.fulfilled, (state, action) => state
        .filter((book) => book.id !== action.meta.arg));
  },
});

export default booksSlice.reducer;
