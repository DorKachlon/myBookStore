import React from "react";
import "./style.css";
import { useSelector, useDispatch } from "react-redux";
import { addBook } from "../../actions/books";

export default function BooksDashboard() {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);
  const clickHandler = () => {
    // localStorage.setItem("myFirstKey", "myFirstValue");
    dispatch(addBook("hello"));
  };
  return (
    <div>
      <button onClick={clickHandler}>click</button>
      {books.map((book) => (
        <h1>{book}</h1>
      ))}
    </div>
  );
}
