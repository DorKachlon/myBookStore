import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeDeletion } from "../../actions/deletion";
import { changeEditing } from "../../actions/editing";
import { useLocation } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import Cover from "./Cover.svg";

import "./style.css";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function TopNavbar() {
  const [booksOrCategories, setBooksOrCategories] = useState();
  const dispatch = useDispatch();
  const classes = useStyles();

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
        setBooksOrCategories("");
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
          <Link to="/" className="logo-title-svg">
            <img src={Cover} alt="logo-title" />
          </Link>

          <Link to={booksOrCategories === "books" ? "/add-book" : "/add-category"}>
            <Tooltip title={booksOrCategories === "books" ? "Add a book" : "Add a category"}>
              <Button variant="contained" className={classes.button}>
                {booksOrCategories === "books" ? "add book" : "add categories"}
              </Button>
            </Tooltip>
          </Link>
          <Tooltip title={deletion ? "Stop Deletion" : "Start deleting"}>
            <Button variant="contained" onClick={deleteHandler} className={classes.button}>
              {deletion ? "Cancel Deletion" : "Delete"}
            </Button>
          </Tooltip>
          <Tooltip title={editing ? "Stop Editing" : "Start Editing"}>
            <Button variant="contained" onClick={editHandler} className={classes.button}>
              {editing ? "Stop Editing" : "Edit"}
            </Button>
          </Tooltip>
        </>
      )}
    </nav>
  );
}
