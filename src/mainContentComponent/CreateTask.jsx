import React from "react";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Button from "react-bootstrap/Button";

function CreateTask() {
  return (

    <Form className="my-3 mx-3">
      <Row> 
        {/* first column */}
        <Col>
          <Form.Label className="text-left">Task Name</Form.Label>
          <Form.Control placeholder="task name" />
          
         
            <Form.Label>Priroty</Form.Label>
            <Form.Control as="select" custom>
              <option selected>select a priority</option>
              <option value="1">HIGH</option>
              <option value="2">MEDIUM</option>
              <option value="3">LOW</option>
            </Form.Control>
        
            <Form.Label>Status</Form.Label>
            <Form.Control as="select" custom>
              <option selected>select a status</option>
              <option value="1">TO START</option>
              <option value="2">ONGOING</option>
              <option value="3">DONE</option>
              <option value="3">OVERDUE</option>
            </Form.Control>
        
          
          
          <Row>
            <Col>
              <Form.Label>Start Date</Form.Label>
              <DatePicker />
            </Col>
            <Col>
              <Form.Label>Due Date</Form.Label>
              <DatePicker />
            </Col>
          </Row>
        
          <Form.Label>Group/Tag</Form.Label>
          <Form.Control as="select" custom>
            <option selected>select a tag</option>
          </Form.Control>
          <Form.Label>Category/List</Form.Label>
          <Form.Control as="select" custom>
            <option selected>select a List</option>
          </Form.Control>
        </Col>
        <Col>
          <Form.Check type="checkbox" aria-label="recurring" inline/>
          <Form.Label inline>Recurring Task?</Form.Label>

          <Form.Label>Freuency</Form.Label>
          <Form.Control as="select" custom>
            <option selected>select a frequency</option>
            <option value >DAILY</option>
            <option value >WEEKLY</option>
            <option value >MONTHLY</option>
          </Form.Control>
          <Form.Label>Repeated Times</Form.Label>
          <Form.Control type="text" placeholder="enter the number of times you want to repeatedly created the tasks." />
          <Form.Label>Decription</Form.Label>
          <Form.Control as="textarea" placeholder="description....." />
          
          <Col>
            <Button variant="success" >Cancel</Button>
          </Col>
          <Col>
          <Button variant="success" as="submit" >Submit</Button>
          </Col>
          
         
          
          

        </Col>
      </Row>
     </Form> 
  
  );
}

export default CreateTask;
