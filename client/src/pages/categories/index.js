import React from "react";
import "./style.css";
import CategoriesDashboard from "../../components/categoriesDashboard.js";
import Fab from "@material-ui/core/Fab";
import Tooltip from "@material-ui/core/Tooltip";
import SortIcon from "@material-ui/icons/Sort";
import { useDispatch } from "react-redux";
import { sortCategories } from "../../actions/categories";

export default function Categories() {
  const dispatch = useDispatch();

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
      <CategoriesDashboard />
    </div>
  );
}
