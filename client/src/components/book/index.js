import React, { useState } from "react";
import "./style.css";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { useDispatch } from "react-redux";
import { removeBook } from "../../actions/books";
import Chip from "@material-ui/core/Chip";
import MyModal from "./Modal";

export default function Book({ book, deletion, editing }) {
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();

  const deleteHandler = (toDelete) => {
    dispatch(removeBook(toDelete));
  };

  return (
    <div className="book-card">
      <h2 className="book-card-name">{book.name}</h2>
      <div className="book-card-author">{book.author}</div>
      <div className="book-card-price">{book.price}</div>
      {book.category.map((oneCategory, i) => (
        <Chip label={oneCategory} key={i} />
      ))}
      {deletion || editing ? (
        <div className="book-card-control-panel">
          {deletion && (
            <button className="book-card-delete" onClick={() => deleteHandler(book)}>
              <DeleteIcon style={{ color: "white" }} />
            </button>
          )}
          {editing && (
            <button className="book-card-edit">
              <EditIcon style={{ color: "white" }} onClick={() => setOpen(true)} />
            </button>
          )}
        </div>
      ) : (
        <></>
      )}
      {book && open && <MyModal open={open} setOpen={setOpen} book={book} />}
    </div>
  );
}
