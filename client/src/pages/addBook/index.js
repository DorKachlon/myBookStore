import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import "./style.css";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import InputAdornment from "@material-ui/core/InputAdornment";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import ErrorOutlineOutlinedIcon from "@material-ui/icons/ErrorOutlineOutlined";

import { useDispatch } from "react-redux";
import { addBook } from "../../actions/books";
import { useHistory } from "react-router-dom";
import bookValidation from "../../validation/bookValidation";

export default function AddBook() {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  const handleClick = async (event) => {
    event.preventDefault();
    const newBook = { id: Date.now().toString(), name, author, price, category };
    try {
      await bookValidation(newBook);
      dispatch(addBook(newBook));
      history.push("/books");
    } catch (error) {
      setError(error.errors[0].split(",")[0]);
    }
  };

  return (
    <form className="add-book-page page" onSubmit={(e) => handleClick(e)}>
      <h2>Here you can add a new Book</h2>
      <FormControl>
        <TextField
          value={name}
          label="Name of the book"
          variant="outlined"
          onChange={(e) => setName(e.currentTarget.value)}
        />
      </FormControl>
      <FormControl>
        <TextField
          value={author}
          label="Name of the author"
          variant="outlined"
          onChange={(e) => setAuthor(e.currentTarget.value)}
        />
      </FormControl>

      <FormControl fullWidth variant="outlined">
        <InputLabel htmlFor="outlined-adornment-amount">What's the price?</InputLabel>
        <OutlinedInput
          value={price}
          onChange={(e) => setPrice(e.currentTarget.value)}
          startAdornment={<InputAdornment position="start">$</InputAdornment>}
          labelWidth={130}
        />
      </FormControl>

      <FormControl variant="outlined">
        <InputLabel>Choose category</InputLabel>
        <Select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          label="Choose category"
        >
          <MenuItem value={"Ten"}>Ten</MenuItem>
        </Select>
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
  );
}
