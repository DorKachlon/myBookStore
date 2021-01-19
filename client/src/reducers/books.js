import { saveBooks } from "../localStorage/books";
import { findAndDelete, findAndUpdate, sortArr } from "../helperFunction";

const booksReducer = (state = [], action) => {
  switch (action.type) {
    case "AddBook": {
      state.push(action.payload);
      saveBooks(state);
      return state;
    }

    case "RemoveBook": {
      const newList = findAndDelete(state, action.payload);
      saveBooks(newList);
      return newList;
    }

    case "UpdateBook": {
      const newList = findAndUpdate(state, action.payload);
      saveBooks(newList);
      return newList;
    }
    case "SortBooks": {
      const newList = sortArr(state);
      saveBooks(newList);
      return newList;
    }
    case "FetchBooks":
      return action.payload;

    default:
      return state;
  }
};

export default booksReducer;
