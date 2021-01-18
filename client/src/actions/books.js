export const addBook = (newBook) => {
  return { type: "AddBook", payload: newBook };
};

export const removeBook = (toDelete) => {
  return { type: "RemoveBook", payload: toDelete };
};

export const fetchBooks = (localStorageBooks) => {
  return { type: "FetchBooks", payload: localStorageBooks };
};
