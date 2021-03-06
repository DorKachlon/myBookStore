import React from "react";
import { useSelector } from "react-redux";
import Book from "../bookCard";
import "./style.css";

export default function BooksDashboard() {
  const books = useSelector((state) => state.books);
  const deletion = useSelector((state) => state.deletion);
  const editing = useSelector((state) => state.editing);

  return (
    <>
      <div className="books-dashboard">
        {books &&
          books.map((book) => (
            <Book book={book} deletion={deletion} editing={editing} key={book.id} />
          ))}
      </div>
    </>
  );
}
