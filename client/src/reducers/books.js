const booksReducer = (state = [], action) => {
  switch (action.type) {
    case "AddBook":
      state.push(action.data);
      return state;
    case "RemoveBook":
      return state;
    default:
      return state;
  }
};

export default booksReducer;
