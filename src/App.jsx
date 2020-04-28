import React from "react";
import CurrentDate from "./headingComponent/CurrentDate";
import Menu from "./headingComponent/Menu";
import SimpleSearch from "./headingComponent/SimpleSearch";
import UpcomingTask from "./sidebarComponent/UpcomingTask";
import ListGroup from "./sidebarComponent/ListGroup";
import TagGroup from "./sidebarComponent/TagGroup";
import TaskItem from "./mainContentComponent/TaskItem";
import SortButton from "./mainContentComponent/SortButton";
import CreateTask from "./mainContentComponent/CreateTask";
import ExportList from "./mainContentComponent/ExportList";

function App() {
  return (
    <>
      <div className="head">
        <CurrentDate />
        <Menu />
        <SimpleSearch />
      </div>

      <div className="sidebar">
        <UpcomingTask />
        <ListGroup />
        <TagGroup />
      </div>

      <div className="main">
        <SortButton />
        <TaskItem />
        <CreateTask />
        <ExportList />
      </div>
    </>
  );
}

export default App;
