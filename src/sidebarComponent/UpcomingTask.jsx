import React from "react";
import tasks from "../tasks";



function createTask(task){
return <button>{task.dueDate}</button>;

}




function UpcomingTask() {
  return (
    <div className="upcoming">
      <label htmlfor="">Upcoming Tasks</label>
      <button>Add</button>
      {tasks.map(createTask)}
     

    </div>
  );
}

export default UpcomingTask;
