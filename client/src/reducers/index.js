import booksReducer from "./books";
import categoriesReducer from "./categories";
import { combineReducers } from "redux";

const allReducers = combineReducers({ books: booksReducer, categories: categoriesReducer });
export default allReducers;
