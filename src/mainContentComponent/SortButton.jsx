import React from "react";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';

function SortButton() {
  return (
    <Row>
      <div className="col-2"></div>
      <ButtonGroup className="sortBtn my-5 col-8">
      <Button variant="success" className="border border-dark">All</Button>
      <Button variant="success" className="border border-dark">To Start</Button>
      <Button variant="success" className="border border-dark">Ongoing</Button>
      <Button variant="success" className="border border-dark">Done</Button>
      <Button variant="success" className="border border-dark">Overdue</Button>
    </ButtonGroup>
   

    </Row>
    
  );
}

export default SortButton;
