import React from "react";
import InputGroup from 'react-bootstrap/InputGroup';
import Navlink from 'react-bootstrap/Navlink';

function Tag() {
  return (

    <InputGroup size="sm" className="my-3 mx-1 row justify-content-between">
      <InputGroup.Text id="inputGroup-sizing-md"className="border border-0 bg-transparent" >Tag</InputGroup.Text>
      <InputGroup.Append >
        {/* onlclck to creating task url */}
        <Navlink variant="outline-success" className=" border border-success btn-outline-success rounded-sm mr-2">Add Tag</Navlink>
      </InputGroup.Append>
    </InputGroup> 
  );
}

export default Tag;
