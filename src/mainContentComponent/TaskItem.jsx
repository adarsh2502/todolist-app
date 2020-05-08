import React from "react";
import tasks from "../tasks";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function createTaskItem(task){
  return (
    <Row>
      <div className="col-2"></div>
      <Button className="my-1 col-8" variant="outline-success">
        <Row>
          <Col lg={8} className="text-left">{task.name}</Col>
          <Col lg={2} className="text-left">{task.dueDate}</Col>
          <Col lg={2} className="text-left">{task.priority}</Col>
       </Row>
      </Button>
    </Row>
  );
  
}

function TaskItem() {
  return (
    <>
      {tasks.map(createTaskItem)}
    </>
  );
}

export default TaskItem;
