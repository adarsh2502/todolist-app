import React from "react";
import EachDate from"./EachDate";




function UpcomingTask() {
  return (
    <div className="upcoming">
      <label htmlfor="">Upcoming Tasks</label>
      <button>Add</button>
   
      <EachDate />
   
      
     
    </div>
  );
}

export default UpcomingTask;
