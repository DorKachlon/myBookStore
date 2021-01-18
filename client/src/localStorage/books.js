export function saveBooks(data) {
  console.log(data);
  localStorage.setItem("myBookStore-books", JSON.stringify({ books: data }));
}
