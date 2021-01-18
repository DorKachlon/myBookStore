import React, { useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import SaveIcon from "@material-ui/icons/Save";
import { useDispatch } from "react-redux";
import { removeCategory, updateCategory } from "../../actions/categories";
import TextField from "@material-ui/core/TextField";

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
            <button className="category-card-delete" onClick={() => deleteHandler(category)}>
              <DeleteIcon style={{ color: "white" }} />
            </button>
          )}
          {editing &&
            (wantToEdit ? (
              <button className="category-card-edit">
                <SaveIcon style={{ color: "white" }} onClick={saveHandler} />
              </button>
            ) : (
              <button className="category-card-edit">
                <EditIcon
                  style={{ color: "white" }}
                  onClick={() => setWantToEdit((prev) => !prev)}
                />
              </button>
            ))}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
