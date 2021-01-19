import React, { useState } from "react";
import Book from "../bookCard";
import { useSelector } from "react-redux";
import Select from "react-select";
import "./style.css";

export default function BooksDashboardSearch() {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const categories = useSelector((state) => state.categories);
  const books = useSelector((state) => state.books);
  const deletion = useSelector((state) => state.deletion);
  const editing = useSelector((state) => state.editing);

  const options = categories.map((category) => {
    return { value: category.name, label: category.name };
  });

  let bookMatches;
  if (books && selectedCategories) {
    bookMatches = matchCategories(selectedCategories, books);
  }

  return (
    <div className="book-dashboard-search-container">
      <h2 className="book-dashboard-search-title">Search By Categories:</h2>
      <div className="book-dashboard-search-selector">
        <Select
          isMulti
          value={selectedCategories}
          onChange={(e) => setSelectedCategories(e)}
          options={options}
          style={{ minWidth: "400px", width: "50%" }}
        />
      </div>
      <div className="book-dashboard-search-books">
        {bookMatches &&
          bookMatches.map((book) => (
            <Book book={book} deletion={deletion} editing={editing} key={book.id} />
          ))}
      </div>
    </div>
  );
}

function matchCategories(categories, books) {
  const clearCategories = categories.map((category) => category.label);
  const matches = books.filter((book) => {
    return clearCategories.some((item) => book.category.includes(item));
  });
  return matches;
}
