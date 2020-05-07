import React from "react";
import EachDate from"./EachDate";
import Navlink from 'react-bootstrap/Navlink';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from "react-bootstrap/Button";



function UpcomingTask(props) {
  return (
    <div className ="mx-2">
      <InputGroup size="sm" className="my-3 mx-1 row justify-content-between">
        <InputGroup.Text id="inputGroup-sizing-md"className="border border-0 bg-transparent px-0">Upcoming Tasks</InputGroup.Text>
        <InputGroup.Append>
          {/* onlclck to creating task url */}
          <Button variant="success" className="rounded-sm"
            onClick={()=>props.setPage('create')}>Add Task</Button>
        </InputGroup.Append>
      </InputGroup> 
      <EachDate className="mx-2"/>

    </div>
      
      
  

    
  );
}

export default UpcomingTask;
