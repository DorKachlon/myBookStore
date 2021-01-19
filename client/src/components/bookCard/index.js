import React, { useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import Chip from "@material-ui/core/Chip";
import Tooltip from "@material-ui/core/Tooltip";

import MyModal from "./Modal";

import { removeBook } from "../../actions/books";
import { useDispatch } from "react-redux";
import "./style.css";

export default function Book({ book, deletion, editing }) {
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();

  const deleteHandler = (toDelete) => {
    dispatch(removeBook(toDelete));
  };

  return (
    <div className={deletion ? "book-card delete-animation" : "book-card"}>
      <h2 className="book-card-name">{book.name}</h2>
      <div className="book-card-author">{book.author}</div>
      <div className="book-card-price">{book.price}</div>
      <div className="book-card-chips">
        {book.category.map((oneCategory, i) => (
          <Chip label={oneCategory} key={i} />
        ))}
      </div>
      {deletion || editing ? (
        <div className="book-card-control-panel">
          {deletion && (
            <Tooltip title="Delete">
              <button className="book-card-delete" onClick={() => deleteHandler(book)}>
                <DeleteIcon style={{ color: "white" }} />
              </button>
            </Tooltip>
          )}
          {editing && (
            <Tooltip title="Edit">
              <button className="book-card-edit">
                <EditIcon style={{ color: "white" }} onClick={() => setOpen(true)} />
              </button>
            </Tooltip>
          )}
        </div>
      ) : (
        <></>
      )}
      {book && open && <MyModal open={open} setOpen={setOpen} book={book} />}
    </div>
  );
}
