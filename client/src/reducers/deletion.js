const deletionReducer = (state = false, action) => {
  switch (action.type) {
    case "ChangeDeletion":
      return !state;

    default:
      return state;
  }
};

export default deletionReducer;
