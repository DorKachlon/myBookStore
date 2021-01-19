export function saveBooks(data) {
  localStorage.setItem("myBookStore-books", JSON.stringify({ books: data }));
}
