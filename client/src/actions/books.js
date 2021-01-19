export const addBook = (newBook) => {
  return { type: "AddBook", payload: newBook };
};

export const removeBook = (toDelete) => {
  return { type: "RemoveBook", payload: toDelete };
};

export const updateBook = (newUpdateBook) => {
  return { type: "UpdateBook", payload: newUpdateBook };
};

export const sortBooks = () => {
  return { type: "SortBooks" };
};

export const fetchBooks = (localStorageBooks) => {
  return { type: "FetchBooks", payload: localStorageBooks };
};
