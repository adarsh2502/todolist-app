import React from "react";
import Link from "./Link";

function Menu(props) {
  return (
    <div className="menu" class="d-flex justify-content-center">
      <Link 
        name = "Home"
        href="#"
        class="d-flex align-items-end mx-3"
        onClick={() => props.setPage('tasks')} 
      />
        
      <Link 
      name = "Create a Task"
      href="#"
      class="d-flex align-items-end mx-3"
      onClick={() => props.setPage('create')}     
      />
      <Link 
      name = "Export List"
      href="#"
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

