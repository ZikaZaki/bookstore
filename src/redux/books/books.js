import { v4 as uuidv4 } from 'uuid';

// Bookstore API
const apiKey = 'Fbdc45RKcHa3Ou9VViQW';
const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';
const getBooksURL = `${baseURL}${apiKey}/books/`;

// Actions
const ADD = 'bookStore/books/ADD';
const UPDATE = 'bookStore/books/UPDATE';
const REMOVE = 'bookStore/books/REMOVE';

const initialBooks = [
  {
    id: uuidv4(), title: 'The Hobbit', author: 'J.R.R. Tolkien', category: 'Fantasy',
  },
  {
    id: uuidv4(), title: 'The Fellowship of the Ring', author: 'J.R.R. Tolkien', category: 'Fantasy',
  },
  {
    id: uuidv4(), title: 'The Return of the King', author: 'J.R.R. Tolkien', category: 'Action',
  },
  {
    id: uuidv4(), title: 'The Two Towers', author: 'J.R.R. Tolkien', category: 'Action',
  },
  {
    id: uuidv4(), title: 'The Silmarillion', author: 'J.R.R. Tolkien', category: 'Sci-Fi',
  },
  {
    id: uuidv4(), title: 'The Two Towers', author: 'J.R.R. Tolkien', category: 'Fantasy',
  },
  {
    id: uuidv4(), title: 'The Apple Cart', author: 'G.B. Shaw', category: 'Drama',
  },
  {
    id: uuidv4(), title: 'The Silmarillion', author: 'J.R.R. Tolkien', category: 'Fantasy',
  },
  {
    id: uuidv4(), title: 'The Magician\'s Nephew', author: 'C.S. Lewis', category: 'Fantasy',
  },
  {
    id: uuidv4(), title: 'The Doctor\'s Dilemma', author: 'G.B. Shaw', category: 'Drama',
  },
];

// Reducer
const initialState = initialBooks;

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    // do reducer stuff
    case ADD:
      return [...state, action.payload];
    case UPDATE:
      return state.map((book) => {
        if (book.id === action.payload.id) {
          return { ...book, ...action.payload };
        } return book;
      });
    case REMOVE:
      return state.filter((book) => book.id !== action.payload);
    default: return state;
  }
};

// Action creators
const addBook = (payload) => ({
  type: ADD,
  payload,
});

const updateBook = (payload) => ({
  type: UPDATE,
  payload,
});

const removeBook = (payload) => ({
  type: REMOVE,
  payload,
});

// Selectors
const getBooks = (state) => state.books;

export {
  addBook, updateBook, removeBook, getBooks,
};

export default booksReducer;
