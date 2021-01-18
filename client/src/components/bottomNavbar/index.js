import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import CategoryIcon from "@material-ui/icons/Category";
import Tooltip from "@material-ui/core/Tooltip";

export default function BottomNavbar() {
  return (
    <nav className="bottom-navbar">
      <Link to="/books">
        <Tooltip title="Books" placement="top">
          <button className="bottom-navbar-books">
            <MenuBookIcon style={{ color: "white" }} />
          </button>
        </Tooltip>
      </Link>
      <Link to="/categories">
        <Tooltip title="Categories" placement="top">
          <button className="bottom-navbar-categories">
            <CategoryIcon style={{ color: "white" }} />
          </button>
        </Tooltip>
      </Link>
    </nav>
  );
}
