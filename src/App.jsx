import React, { useState } from "react";
import CurrentDate from "./headingComponent/CurrentDate";
import Menu from "./headingComponent/Menu";
import SimpleSearch from "./headingComponent/SimpleSearch";
import UpcomingTask from "./sidebarComponent/UpcomingTask";
import List from "./sidebarComponent/List";
import Tag from "./sidebarComponent/Tag";
import TaskItem from "./mainContentComponent/TaskItem";
import SortButton from "./mainContentComponent/SortButton";
import CreateTask from "./mainContentComponent/CreateTask";
import ExportList from "./mainContentComponent/ExportList";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function App () {
  const [page, setPage] = useState('task');

  let main;
  switch (page) {
    default:
      main = 
      <>
        <SortButton />
        <TaskItem />
      </>
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
      <Navbar bg="dark" variant="dark" expand="lg" className="head">
        <CurrentDate />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto ">
            <Menu setPage={setPage}  />
          </Nav>  
          <SimpleSearch />
        </Navbar.Collapse>
      </Navbar>
      <div className="sidebar border-right border-success pr-2">
        <div className="upcoming">
          <UpcomingTask setPage={setPage} className=""/>
        </div>
        <div>
          <List className="list"/>
        </div>
        <div>
          <Tag className="tag"/>
        </div>
      </div>
      
     
      <div className="main">
        { main }
      </div>
    </>
  );
}

export default App;