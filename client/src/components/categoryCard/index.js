import React, { useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import SaveIcon from "@material-ui/icons/Save";
import TextField from "@material-ui/core/TextField";
import Tooltip from "@material-ui/core/Tooltip";

import { useDispatch } from "react-redux";
import { removeCategory, updateCategory } from "../../actions/categories";
import "./style.css";

export default function CategoryCard({ category, deletion, editing }) {
  const [wantToEdit, setWantToEdit] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const dispatch = useDispatch();

  const deleteHandler = (toDelete) => {
    dispatch(removeCategory(toDelete));
  };
  const saveHandler = () => {
    setWantToEdit(false);
    if (inputValue) {
      category.name = inputValue;
      dispatch(updateCategory(category));
    }
  };
  return (
    <div className="category-card">
      {wantToEdit ? (
        <TextField
          defaultValue={category.name}
          onChange={(e) => setInputValue(e.currentTarget.value)}
        />
      ) : (
        <div className="category-card-name">{category.name}</div>
      )}
      {deletion || editing ? (
        <div className="category-card-control-panel">
          {deletion && (
            <Tooltip title="Delete">
              <button className="category-card-delete" onClick={() => deleteHandler(category)}>
                <DeleteIcon style={{ color: "white" }} />
              </button>
            </Tooltip>
          )}
          {editing &&
            (wantToEdit ? (
              <Tooltip title="Save">
                <button className="category-card-edit">
                  <SaveIcon style={{ color: "white" }} onClick={saveHandler} />
                </button>
              </Tooltip>
            ) : (
              <Tooltip title="Edit">
                <button className="category-card-edit">
                  <EditIcon
                    style={{ color: "white" }}
                    onClick={() => setWantToEdit((prev) => !prev)}
                  />
                </button>
              </Tooltip>
            ))}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
