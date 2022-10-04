// Actions
const ADD = 'bookStore/categories/ADD';
const UPDATE = 'bookStore/categories/UPDATE';
const REMOVE = 'bookStore/categories/REMOVE';

// Reducer
const initialState = [];
const categoriesReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    // do reducer stuff
    default: return state;
  }
};

// Action creators
const addCategory = (payload) => ({
  type: ADD,
  payload,
});

const updateCategory = (payload) => ({
  type: UPDATE,
  payload,
});

const removeCategory = (payload) => ({
  type: REMOVE,
  payload,
});

// Selectors
const getCategories = (state) => state.categories;

export {
  addCategory, updateCategory, removeCategory, getCategories,
};
export default categoriesReducer;
