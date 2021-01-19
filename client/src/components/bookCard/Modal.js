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
import { updateBook } from "../../actions/books";
import { bookValidationUpdate } from "../../validation/bookValidation";
import "./style.css";

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
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    borderRadius: "3px",
  },
}));

export default function MyModal({ open, setOpen, book }) {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState();
  const [error, setError] = useState("");
  const [modalStyle] = useState(getModalStyle);

  const categories = useSelector((state) => state.categories);
  const options = categories.map((category) => {
    return { value: category.name, label: category.name };
  });

  const handleClose = () => {
    setOpen(false);
  };
  const dispatch = useDispatch();

  const handleClick = async (event) => {
    event.preventDefault();
    let categoryArr;
    if (category) {
      categoryArr = category.map((cate) => cate.label);
    }
    const newProps = clean({ name, author, price, category: categoryArr });
    const newBook = { ...book, ...newProps };
    try {
      await bookValidationUpdate(newBook);
      dispatch(updateBook(newBook));
      setOpen(false);
    } catch (error) {
      setError(error.errors[0].split(",")[0]);
    }
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

            <Button variant="contained" type="submit" color="primary">
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
        style={{ backdropFilter: "blur(10px)" }}
      >
        {body}
      </Modal>
    </div>
  );
}

function clean(obj) {
  for (var propName in obj) {
    if (obj[propName] === null || obj[propName] === undefined || obj[propName] === "") {
      delete obj[propName];
    }
  }
  return obj;
}
