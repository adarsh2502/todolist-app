import React from "react";

function Menu() {
  return (
    <div className="menu" class="d-flex justify-content-center">
      <a class="d-flex align-items-end mx-3" href="#home">Add New Task</a>
      <a class="d-flex align-items-end mx-3"  href="#export">Export List</a>
      <a class="d-flex align-items-end mx-3"  href="#search">Complex Search</a>
    </div>
  );
}

export default Menu;
