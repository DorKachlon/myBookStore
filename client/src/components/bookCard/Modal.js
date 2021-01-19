import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import InputAdornment from "@material-ui/core/InputAdornment";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import ErrorOutlineOutlinedIcon from "@material-ui/icons/ErrorOutlineOutlined";
import { useSelector } from "react-redux";
import Select from "react-select";

import { useDispatch } from "react-redux";
import { addBook } from "../../actions/books";
import { useHistory } from "react-router-dom";
import bookValidation from "../../validation/bookValidation";
import "./style.css";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function MyModal({ open, setOpen, book }) {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState();
  const [error, setError] = useState("");
  const categories = useSelector((state) => state.categories);
  const options = categories.map((category) => {
    return { value: category.name, label: category.name };
  });

  const [modalStyle] = React.useState(getModalStyle);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const dispatch = useDispatch();
  const history = useHistory();

  const handleClick = async (event) => {
    event.preventDefault();
    let categoryArr;
    if (category) {
      categoryArr = category.map((cate) => cate.label);
    }
    const newBook = { name, author, price, category: categoryArr };
    console.log(newBook);
    console.log(book);

    // try {
    //   await bookValidation(newBook);
    //   dispatch(addBook(newBook));
    //   history.push("/books");
    // } catch (error) {
    //   setError(error.errors[0].split(",")[0]);
    // }
  };

  const body = (
    <>
      {book && (
        <div style={modalStyle} className={classes.paper}>
          <form className="model" onSubmit={(e) => handleClick(e)}>
            <h2 className="title">Edit this book</h2>
            <FormControl>
              <TextField
                defaultValue={book.name}
                label="Name of the book"
                variant="outlined"
                onChange={(e) => setName(e.currentTarget.value)}
              />
            </FormControl>
            <FormControl>
              <TextField
                defaultValue={book.author}
                label="Name of the author"
                variant="outlined"
                onChange={(e) => setAuthor(e.currentTarget.value)}
              />
            </FormControl>

            <FormControl fullWidth variant="outlined">
              <InputLabel htmlFor="outlined-adornment-amount">What's the price?</InputLabel>
              <OutlinedInput
                defaultValue={book.price}
                onChange={(e) => setPrice(e.currentTarget.value)}
                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                labelWidth={130}
              />
            </FormControl>

            <Select
              isMulti
              value={category}
              onChange={(e) => setCategory(e)}
              options={options}
              defaultValue={book.category.map((element) => ({ value: element, label: element }))}
            />

            <Button variant="contained" type="submit">
              Update book
            </Button>
            {error && (
              <div className="login-error">
                <ErrorOutlineOutlinedIcon style={{ color: "white" }} />
                <span>{error}</span>
              </div>
            )}
          </form>
          <MyModal />
        </div>
      )}
    </>
  );

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
