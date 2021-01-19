const searchReducer = (state = false, action) => {
  switch (action.type) {
    case "ChangeSearch":
      return !state;
    default:
      return state;
  }
};

export default searchReducer;
