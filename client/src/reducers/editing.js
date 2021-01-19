const editingReducer = (state = false, action) => {
  switch (action.type) {
    case "ChangeEditing":
      return !state;

    default:
      return state;
  }
};

export default editingReducer;
