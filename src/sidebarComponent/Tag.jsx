import React from "react";
import InputGroup from 'react-bootstrap/InputGroup';
import Button from "react-bootstrap/Button";

function Tag(props) {
  return (
    <div className="mx-3">
         <InputGroup size="sm" className="my-3 mx-1 row justify-content-between">
        <InputGroup.Text id="inputGroup-sizing-md"className="border border-0 bg-transparent px-0">Tag</InputGroup.Text>
        <InputGroup.Append>
          {/* onlclck to creating task url */}
          <Button variant="success" className="rounded-sm" onClick={()=>{props.addTagItem("give a tag name")}}>Add Tag</Button>
        </InputGroup.Append>
      </InputGroup>
    </div> 
   
  );
}

export default Tag;
