import booksReducer from "./books";
import categoriesReducer from "./categories";
import deletionReducer from "./deletion";
import editingReducer from "./editing";
import groupedReducer from "./grouped";
import searchReducer from "./search";

import { combineReducers } from "redux";

const allReducers = combineReducers({
  books: booksReducer,
  categories: categoriesReducer,
  deletion: deletionReducer,
  editing: editingReducer,
  grouped: groupedReducer,
  search: searchReducer,
});
export default allReducers;
