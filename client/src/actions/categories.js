export const addCategory = (newCategory) => {
  return { type: "AddCategory", payload: newCategory };
};

export const removeCategory = (newCategory) => {
  return { type: "RemoveCategory", payload: newCategory };
};
export const updateCategory = (newUpdateCategory) => {
  return { type: "UpdateCategory", payload: newUpdateCategory };
};
export const sortCategories = () => {
  return { type: "SortCategories" };
};
export const fetchCategories = (localStorageCategories) => {
  return { type: "FetchCategories", payload: localStorageCategories };
};
