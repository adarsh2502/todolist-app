import React from "react";
import tasks from "../tasks";

function createTaskItem(task){
  return <button>{task.name}{task.dueDate} </button>
}

function TaskItem() {
  return (
    <a href="www.google.com">
      {tasks.map(createTaskItem)}
    </a>
  );
}

export default TaskItem;
