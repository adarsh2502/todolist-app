import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";


function TagItem(props){
    return (
        <div className="mx-3">
            <Button size="sm" variant="outline-success" className="mt-1 mx-1">{props.tag}</Button>
        </div>
        
    );
  
}

export default TagItem;