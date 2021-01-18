import booksReducer from "./books";
import categoriesReducer from "./categories";
import deletionReducer from "./deletion";
import editingReducer from "./editing";

import { combineReducers } from "redux";

const allReducers = combineReducers({
  books: booksReducer,
  categories: categoriesReducer,
  deletion: deletionReducer,
  editing: editingReducer,
});
export default allReducers;
