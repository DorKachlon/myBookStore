import React, { useState } from "react";
import ErrorOutlineOutlinedIcon from "@material-ui/icons/ErrorOutlineOutlined";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import categoryValidation from "../../validation/categoryValidation";
import { addCategory } from "../../actions/categories";

import "./style.css";

export default function AddCategory() {
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  const handleClick = async (event) => {
    event.preventDefault();
    const newCategory = { id: Date.now().toString(), name };
    try {
      await categoryValidation(newCategory);
      dispatch(addCategory(newCategory));
      history.push("/categories");
    } catch (error) {
      setError(error.errors[0].split(",")[0]);
    }
  };

  return (
    <div className="page add-category-page ">
      <form className="add-category-form" onSubmit={(e) => handleClick(e)}>
        <h2 className="title">Here you can add a new Category</h2>
        <FormControl>
          <TextField
            value={name}
            label="Enter a new Category"
            variant="outlined"
            onChange={(e) => setName(e.currentTarget.value)}
          />
        </FormControl>
        <Button variant="contained" type="submit">
          Add book
        </Button>
        {error && (
          <div className="login-error">
            <ErrorOutlineOutlinedIcon style={{ color: "white" }} />
            <span>{error}</span>
          </div>
        )}
      </form>
    </div>
  );
}
