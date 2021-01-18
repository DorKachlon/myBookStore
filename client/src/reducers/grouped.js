const groupedReducer = (state = false, action) => {
  switch (action.type) {
    case "ChangeGrouped":
      return !state;
    default:
      return state;
  }
};

export default groupedReducer;
