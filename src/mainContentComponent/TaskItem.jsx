import React from "react";
import tasks from "../tasks";

function createTaskItem(task){
  return <div><button>{task.name}{task.dueDate} </button></div>
}

function TaskItem() {
  return (
    <a href="www.google.com">
      {tasks.map(createTaskItem)}
    </a>
  );
}

export default TaskItem;
