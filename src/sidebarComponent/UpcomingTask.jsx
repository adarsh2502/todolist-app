import React from "react";
import EachDate from"./EachDate";
import InputGroup from 'react-bootstrap/InputGroup';



function UpcomingTask(props) {
  return (
    <div className="mx-3 mb-3">
        <InputGroup size="sm" className="mt-3 mx-1 row justify-content-between">
        <InputGroup.Text id="inputGroup-sizing-md"className="border border-0 bg-transparent px-0">Upcoming Tasks</InputGroup.Text>
      </InputGroup> 
      <EachDate className="mx-2"/>
    </div>
      
  );
}

export default UpcomingTask;
