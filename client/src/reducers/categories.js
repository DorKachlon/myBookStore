import { saveCategories } from "../localStorage/categories";
import { findAndDelete, findAndUpdate, sortArr } from "../helperFunction";

const categoriesReducer = (state = [], action) => {
  switch (action.type) {
    case "AddCategory": {
      state.push(action.payload);
      saveCategories(state);
      return state;
    }

    case "RemoveCategory": {
      const newList = findAndDelete(state, action.payload);
      saveCategories(newList);
      return newList;
    }

    case "UpdateCategory": {
      const newList = findAndUpdate(state, action.payload);
      saveCategories(newList);
      return newList;
    }

    case "SortCategories": {
      const newList = sortArr(state);
      saveCategories(newList);
      return newList;
    }

    case "FetchCategories":
      return action.payload;

    default:
      return state;
  }
};

export default categoriesReducer;
