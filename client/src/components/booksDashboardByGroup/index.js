import React from "react";
import { useSelector } from "react-redux";
import Book from "../bookCard";
import "./style.css";

export default function BooksDashboardByGroup() {
  const books = useSelector((state) => state.books);
  const deletion = useSelector((state) => state.deletion);
  const editing = useSelector((state) => state.editing);
  const booksByGroup = groupByCategories(books);

  return (
    <>
      <div className="books-dashboard-by-group-container">
        {booksByGroup.map((categoryAndBooks, i) => (
          <>
            <div key={i} className="books-dashboard-by-group-title-and-books">
              {i > 0 && <hr className="line"></hr>}
              <h1 className="books-dashboard-by-group-title">Category: {categoryAndBooks[0]}</h1>
              <div className="books-dashboard-by-group">
                {categoryAndBooks[1].map((book) => (
                  <Book book={book} deletion={deletion} editing={editing} key={book.id} />
                ))}
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
}

function groupByCategories(books) {
  let obj = {};
  books.forEach((element) => {
    const category = element.category;
    for (let i = 0; i < category.length; i++) {
      if (obj[category[i]]) obj[category[i]].push(element);
      else obj[category[i]] = [element];
    }
  });
  let newArr = [];
  for (const [key, value] of Object.entries(obj)) {
    newArr.push([key, value]);
  }
  return newArr;
}
