import React from "react";

import Link from "./Link";

function Menu(props) {
  return (
    <div className="menu" class="d-flex justify-content-center">
      <Link 
        name = "Task-list"
        href="#"
        class="d-flex align-items-end mx-3"
        onClick={() => props.setPage('tasks')} 
      />
        
      <Link 
      name = "Create a Task"
      href="#home"
      class="d-flex align-items-end mx-3"
      onClick={() => props.setPage('create')}     
      />
      <Link 
      name = "Export List"
      href="#export"
      class="d-flex align-items-end mx-3"
      onClick={() => props.setPage('export')}
      />

      <Link 
      name = "Complex Search"
      href="#export"
      class="d-flex align-items-end mx-3"
      onClick={() => props.setPage('search')}
      />
    </div>
  );
}

export default Menu;

