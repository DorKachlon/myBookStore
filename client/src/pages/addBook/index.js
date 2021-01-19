import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import InputAdornment from "@material-ui/core/InputAdornment";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import ErrorOutlineOutlinedIcon from "@material-ui/icons/ErrorOutlineOutlined";
import Select from "react-select";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { addBook } from "../../actions/books";
import bookValidation from "../../validation/bookValidation";
import "./style.css";

export default function AddBook() {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState();
  const [error, setError] = useState("");

  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  const history = useHistory();

  const options = categories.map((category) => {
    return { value: category.name, label: category.name };
  });

  const handleClick = async (event) => {
    event.preventDefault();
    let categoryArr;
    if (category) {
      categoryArr = category.map((cate) => cate.label);
    }
    const newBook = { id: Date.now().toString(), name, author, price, category: categoryArr };
    try {
      await bookValidation(newBook);
      dispatch(addBook(newBook));
      history.push("/books");
    } catch (error) {
      setError(error.errors[0].split(",")[0]);
    }
  };

  return (
    <div className="add-book-page page">
      <form className="add-book-form" onSubmit={(e) => handleClick(e)}>
        <h2 className="title">Here you can add a new Book</h2>
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

        <Select isMulti value={category} onChange={(e) => setCategory(e)} options={options} />

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
