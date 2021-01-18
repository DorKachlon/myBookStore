import { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/books";
import AddBook from "./pages/addBook";
import AddCategory from "./pages/addCategory";
import Categories from "./pages/categories";

import BottomNavbar from "./components/bottomNavbar";
import TopNavbar from "./components/topNavbar";
import { useDispatch } from "react-redux";
import { fetchBooks } from "./actions/books";
import { fetchCategories } from "./actions/categories";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const booksFromLocalStorage = localStorage.getItem("myBookStore-books");
    if (booksFromLocalStorage) {
      dispatch(fetchBooks(JSON.parse(booksFromLocalStorage).books));
    }
    const categoriesFromLocalStorage = localStorage.getItem("myBookStore-categories");
    if (categoriesFromLocalStorage) {
      dispatch(fetchCategories(JSON.parse(categoriesFromLocalStorage).categories));
    }
  }, []);

  return (
    <div className="background">
      <Router>
        <TopNavbar />
        <Switch>
          <Route exact path="/books" component={Books} />
          <Route exact path="/categories" component={Categories} />

          <Route exact path="/add-book" component={AddBook} />
          <Route exact path="/add-category" component={AddCategory} />
        </Switch>
        <BottomNavbar />
      </Router>
    </div>
  );
}

export default App;
