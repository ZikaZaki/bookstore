// Actions
const ADD = 'bookStore/books/ADD';
const UPDATE = 'bookStore/books/UPDATE';
const REMOVE = 'bookStore/books/REMOVE';

// Reducer
const initialState = [];
const booksReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    // do reducer stuff
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
