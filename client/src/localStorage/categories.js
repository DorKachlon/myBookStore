export function saveCategories(data) {
  localStorage.setItem("myBookStore-categories", JSON.stringify({ categories: data }));
}
