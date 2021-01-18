import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeDeletion } from "../../actions/deletion";
import { changeEditing } from "../../actions/editing";
import { useLocation } from "react-router-dom";
import "./style.css";
import { Link } from "react-router-dom";

export default function TopNavbar() {
  const [booksOrCategories, setBooksOrCategories] = useState();
  const dispatch = useDispatch();

  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/add-book":
        setBooksOrCategories("books");
        break;
      case "/books":
        setBooksOrCategories("books");
        break;
      case "/add-category":
        setBooksOrCategories("categories");
        break;
      case "/categories":
        setBooksOrCategories("categories");
        break;
      default:
        break;
    }
  }, [location]);

  const deletion = useSelector((state) => state.deletion);
  const editing = useSelector((state) => state.editing);

  const deleteHandler = () => {
    dispatch(changeDeletion());
  };
  const editHandler = () => {
    dispatch(changeEditing());
  };

  return (
    <nav className="top-navbar">
      {booksOrCategories && (
        <>
          <Link to={booksOrCategories === "books" ? "add-book" : "add-category"}>
            <button>{booksOrCategories === "books" ? "add book" : "add categories"}</button>
          </Link>
          <button onClick={deleteHandler}>{deletion ? "Cancel Deletion" : "Delete"}</button>
          <button onClick={editHandler}>{editing ? "Stop Editing" : "Edit"}</button>
        </>
      )}
    </nav>
  );
}
