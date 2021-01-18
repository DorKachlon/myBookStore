const categoriesReducer = (state = [], action) => {
  switch (action.type) {
    case "AddCategory":
      state.push(action.data);
      return state;
    case "RemoveCategory":
      return state;
    default:
      return state;
  }
};

export default categoriesReducer;
