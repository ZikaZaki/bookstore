// Actions
const CHECK_STATUS = 'bookStore/categories/CHECK_STATUS';
const ADD = 'bookStore/categories/ADD';
const UPDATE = 'bookStore/categories/UPDATE';
const REMOVE = 'bookStore/categories/REMOVE';

const initialCategories = {
  categories: [
    {
      id: 1, name: 'Action',
    },
    {
      id: 2, name: 'Biography',
    },
    {
      id: 3, name: 'History',
    },
    {
      id: 4, name: 'Horror',
    },
    {
      id: 5, name: 'Kids',
    },
  ],
  status: '',
};

// Reducer
const initialState = initialCategories;
const categoriesReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    // do reducer stuff
    case CHECK_STATUS:
      return { ...state, status: 'Under Construction' };
    default: return state;
  }
};

// Action creators
const checkStatus = () => ({
  type: CHECK_STATUS,
});

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
  checkStatus, addCategory, updateCategory, removeCategory, getCategories,
};
export default categoriesReducer;
