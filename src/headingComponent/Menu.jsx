import React from "react";
import Navlink from 'react-bootstrap/Navlink';

function Menu(props) {
  return (
    <>
      <Navlink className="mx-4" href="#" onClick={() => props.setPage('tasks')} >Home</Navlink>
      <Navlink className="mx-4"  href="#" onClick={() => props.setPage('create')} >Creating Task</Navlink>
      <Navlink className="mx-4"  href="#" onClick={() => props.setPage('export')} >Exporting List</Navlink>
      <Navlink className="mx-4"  href="#" onClick={() => props.setPage('search')}>Complex Search</Navlink>
    </>
  );
}

export default Menu;

