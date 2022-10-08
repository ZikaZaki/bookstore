import { combineReducers, configureStore } from '@reduxjs/toolkit';
import booksReducer, { fetchBooks } from './books/books';
import categoriesReducer, { getCategories } from './categories/categories';

const rootReducer = combineReducers({
  books: booksReducer,
  categories: categoriesReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export { fetchBooks, getCategories };

export default store;
