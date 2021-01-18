import React from "react";
import "./style.css";
import { useSelector } from "react-redux";

import CategoryCard from "../categoryCard";
export default function CategoriesDashboard() {
  const categories = useSelector((state) => state.categories);
  const deletion = useSelector((state) => state.deletion);
  const editing = useSelector((state) => state.editing);
  console.log(categories);
  return (
    <div className="categories-dashboard">
      {categories.map((category) => (
        <CategoryCard category={category} deletion={deletion} editing={editing} key={category.id} />
      ))}
    </div>
  );
}
