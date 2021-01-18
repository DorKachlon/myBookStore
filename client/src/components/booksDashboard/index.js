import React from "react";
import "./style.css";
import Chip from "@material-ui/core/Chip";
import { connect, useSelector } from "react-redux";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { useDispatch } from "react-redux";
import { removeBook } from "../../actions/books";

function BooksDashboard(prop) {
  const books = useSelector((state) => state.books);
  const deletion = useSelector((state) => state.deletion);
  const editing = useSelector((state) => state.editing);
  const dispatch = useDispatch();

  const deleteHandler = (toDelete) => {
    console.log(toDelete);
    dispatch(removeBook(toDelete));
  };
  return (
    <>
      <h1 className="books-dashboard-title">Books list</h1>
      <div className="books-dashboard">
        {books &&
          books.map((book, i) => (
            <div key={i} className="book-card">
              <h2 className="book-card-name">{book.name}</h2>
              <div className="book-card-author">{book.author}</div>
              <div className="book-card-price">{book.price}</div>
              <Chip label={book.category} />
              {deletion || editing ? (
                <div className="book-card-control-panel">
                  {deletion && (
                    <button className="book-card-delete" onClick={() => deleteHandler(book)}>
                      <DeleteIcon style={{ color: "white" }} />
                    </button>
                  )}
                  {editing && (
                    <button className="book-card-edit">
                      <EditIcon style={{ color: "white" }} />
                    </button>
                  )}
                </div>
              ) : (
                <></>
              )}
            </div>
          ))}
      </div>
    </>
  );
}
const mapStateToProps = (state) => {
  return { books: state.books };
};

export default connect(mapStateToProps, null)(BooksDashboard);
