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
import BooksDashboardByGroup from "../../components/booksDashboardByGroup";
import AllInboxIcon from "@material-ui/icons/AllInbox";
export default function Books() {
  const dispatch = useDispatch();

  const sortHandler = () => {};
  const groupHandler = () => {
    dispatch(changeGrouped());
  };
  const grouped = useSelector((state) => state.grouped);
  console.log(grouped);
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
      </div>

      <h1 className="books-dashboard-title">Books list</h1>
      {grouped ? <BooksDashboardByGroup /> : <BooksDashboard />}
    </div>
  );
}
