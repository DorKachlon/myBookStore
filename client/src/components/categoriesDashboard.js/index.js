import React from "react";
import { useSelector } from "react-redux";
import CategoryCard from "../categoryCard";
import "./style.css";

export default function CategoriesDashboard() {
  const categories = useSelector((state) => state.categories);
  const deletion = useSelector((state) => state.deletion);
  const editing = useSelector((state) => state.editing);

  return (
    <div className="categories-dashboard">
      {categories &&
        categories.map((category) => (
          <CategoryCard
            key={category.id}
            category={category}
            deletion={deletion}
            editing={editing}
          />
        ))}
    </div>
  );
}
