import React from "react";
import "./style.css";
import { useSelector } from "react-redux";
import CategoryCard from "../categoryCard";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Tooltip from "@material-ui/core/Tooltip";

export default function CategoriesDashboard() {
  const categories = useSelector((state) => state.categories);
  const deletion = useSelector((state) => state.deletion);
  const editing = useSelector((state) => state.editing);
  return (
    <div className="categories-dashboard">
      {categories.length > 0 ? (
        categories.map((category) => (
          <CategoryCard
            key={category.id}
            category={category}
            deletion={deletion}
            editing={editing}
          />
        ))
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
