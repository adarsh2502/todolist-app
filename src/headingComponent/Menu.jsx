import React from "react";
import Link from "./Link";

function Menu(props) {
  return (
    <div className="menu" class="d-flex justify-content-center">
      <Link 
        key = "1"
        name = "Home"
        href="#"
        class="d-flex align-items-end mx-3"
        onClick={() => props.setPage('tasks')} 
      />
        
      <Link 
      key = "2"
      name = "Create a Task"
      href="#"
      class="d-flex align-items-end mx-3"
      onClick={() => props.setPage('create')}     
      />
      <Link 
      key = "3"
      name = "Export List"
      href="#"
      class="d-flex align-items-end mx-3"
      onClick={() => props.setPage('export')}
      />

      <Link 
      key = "4"
      name = "Complex Search"
      href="#export"
      class="d-flex align-items-end mx-3"
      onClick={() => props.setPage('search')}
      />
    </div>
  );
}

export default Menu;

