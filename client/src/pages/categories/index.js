import React from "react";
import "./style.css";
import CategoriesDashboard from "../../components/categoriesDashboard.js";
import Fab from "@material-ui/core/Fab";
import Tooltip from "@material-ui/core/Tooltip";
import SortIcon from "@material-ui/icons/Sort";
import { useDispatch } from "react-redux";
import { sortCategories } from "../../actions/categories";
import { useSelector } from "react-redux";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

export default function Categories() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);
  const sortHandler = () => {
    dispatch(sortCategories());
  };

  return (
    <div className="page">
      <div className="categories-page-control-panel">
        <Tooltip title="Sort">
          <Fab variant="contained" onClick={sortHandler} style={{ margin: "5px" }}>
            <SortIcon />
          </Fab>
        </Tooltip>
      </div>
      <h1 className="categories-dashboard-title">Categories list</h1>
      {categories.length > 0 ? (
        <CategoriesDashboard />
      ) : (
        <div className="empty-section">
          <h2>Categories list is Empty :(</h2>
          <h2>Click here to add a new Category : </h2>
          <Link to="/add-category">
            <Tooltip title="Add a Category">
              <Button variant="contained">add a Category</Button>
            </Tooltip>
          </Link>
        </div>
      )}
    </div>
  );
}
