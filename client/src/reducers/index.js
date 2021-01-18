import booksReducer from "./books";
import categoriesReducer from "./categories";
import deletionReducer from "./deletion";
import editingReducer from "./editing";
import groupedReducer from "./grouped";

import { combineReducers } from "redux";

const allReducers = combineReducers({
  books: booksReducer,
  categories: categoriesReducer,
  deletion: deletionReducer,
  editing: editingReducer,
  grouped: groupedReducer,
});
export default allReducers;
