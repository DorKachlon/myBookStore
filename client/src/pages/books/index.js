import React from "react";
import BooksDashboard from "../../components/booksDashboard";
import SortIcon from "@material-ui/icons/Sort";
import "./style.css";
import Fab from "@material-ui/core/Fab";
import Tooltip from "@material-ui/core/Tooltip";
import GroupWorkIcon from "@material-ui/icons/GroupWork";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { changeGrouped } from "../../actions/grouped";
import { changeSearch } from "../../actions/search";
import { sortBooks } from "../../actions/books";

import BooksDashboardByGroup from "../../components/booksDashboardByGroup";
import BooksDashboardSearch from "../../components/booksDashboardSearch";

import AllInboxIcon from "@material-ui/icons/AllInbox";
import SearchIcon from "@material-ui/icons/Search";
import ClearIcon from "@material-ui/icons/Clear";

import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

export default function Books() {
  const books = useSelector((state) => state.books);
  const grouped = useSelector((state) => state.grouped);
  const dispatch = useDispatch();
  const search = useSelector((state) => state.search);

  const sortHandler = () => {
    dispatch(sortBooks());
  };
  const groupHandler = () => {
    if (search) dispatch(changeSearch());
    dispatch(changeGrouped());
  };
  const searchHandler = () => {
    if (grouped) dispatch(changeGrouped());
    dispatch(changeSearch());
  };

  return (
    <div className="books-page page">
      <div className="books-page-control-panel">
        <Tooltip title="Sort">
          <Fab variant="contained" onClick={sortHandler} style={{ margin: "5px" }}>
            <SortIcon />
          </Fab>
        </Tooltip>
        {grouped ? (
          <Tooltip title="Ungrouped ">
            <Fab variant="contained" onClick={groupHandler} style={{ margin: "5px" }}>
              <AllInboxIcon />
            </Fab>
          </Tooltip>
        ) : (
          <Tooltip title="Group By Categories">
            <Fab variant="contained" onClick={groupHandler} style={{ margin: "5px" }}>
              <GroupWorkIcon />
            </Fab>
          </Tooltip>
        )}
        {search ? (
          <Tooltip title="Stop Search">
            <Fab variant="contained" onClick={searchHandler} style={{ margin: "5px" }}>
              <ClearIcon />
            </Fab>
          </Tooltip>
        ) : (
          <Tooltip title="Search">
            <Fab variant="contained" onClick={searchHandler} style={{ margin: "5px" }}>
              <SearchIcon />
            </Fab>
          </Tooltip>
        )}
      </div>

      <h1 className="books-dashboard-title">Books list</h1>
      {books.length > 0 ? (
        grouped ? (
          <BooksDashboardByGroup />
        ) : search ? (
          <BooksDashboardSearch />
        ) : (
          <BooksDashboard />
        )
      ) : (
        <div className="empty-section">
          <h2>Books list is Empty :(</h2>
          <h2>Click here to add a new book : </h2>
          <Link to="/add-book">
            <Tooltip title="Add a book">
              <Button variant="contained">add a book</Button>
            </Tooltip>
          </Link>
        </div>
      )}
    </div>
  );
}
