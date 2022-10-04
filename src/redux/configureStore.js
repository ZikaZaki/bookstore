import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { reducer as formReducer } from 'redux-form';
import booksReducer, { getBooks } from './books/books';
import categoriesReducer, { getCategories } from './categories/categories';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['books', 'categories'],
};

const rootReducer = combineReducers({
  books: booksReducer,
  categories: categoriesReducer,
  form: formReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);

export {
  store, persistor, getBooks, getCategories,
};
