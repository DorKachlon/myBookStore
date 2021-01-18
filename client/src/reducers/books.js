import { saveBooks } from "../localStorage/books";

const booksReducer = (state = [], action) => {
  switch (action.type) {
    case "AddBook": {
      state.push(action.payload);
      saveBooks(state);
      return state;
    }
    case "RemoveBook": {
      const newList = findBookAndDelete(state, action.payload);
      saveBooks(state);
      return newList;
    }
    case "FetchBooks":
      return action.payload;
    default:
      return state;
  }
};

export default booksReducer;

function findBookAndDelete(books, toDelete) {
  return books.filter((book) => book.id === toDelete.id);
}
