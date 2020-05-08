import React from "react";
import Navlink from 'react-bootstrap/Navlink';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

function List() {
  return (
      <div className="mx-3">
        <InputGroup size="sm" className="my-3 mx-1 row justify-content-between">
        <InputGroup.Text id="inputGroup-sizing-md"className="border border-0 bg-transparent px-0">List</InputGroup.Text>
        <InputGroup.Append>
          {/* onlclck to creating task url */}
          <Button variant="success" className="rounded-sm">Add List</Button>
        </InputGroup.Append>
        </InputGroup>    

      </div>
           
 



  );
}

export default List;
