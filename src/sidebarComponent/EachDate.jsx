import React from "react";
import tasks from "../tasks.js";



function createDate(task){
    return <div><button>{task.dueDate}</button></div>;
}


function EachDate(){
    return ( 
    <div>
        {tasks.map(createDate)}
    </div>);
}

export default EachDate;