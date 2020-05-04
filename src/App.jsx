import React, { useState } from "react";
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


function App () {
  const [page, setPage] = useState('task');

  let main;
  switch (page) {
    default:
      main = 
      <><SortButton />
      <TaskItem /></>
      break;
    case 'create':
      main = <CreateTask />
      break;
    case 'export':
      main = <ExportList />
      break;
    case 'search':
      main = <></>
      break;
  }
  return (
    <>
      <div className="head">
        <CurrentDate />
        <Menu setPage={setPage} />
        <SimpleSearch />
      </div>

      <div className="sidebar">
        <UpcomingTask/>
        <ListGroup />
        <TagGroup />
      </div>

      <div className="main">
        { main }
      </div>
    </>
  );
}

export default App;