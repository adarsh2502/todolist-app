import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";


function TagItem(props){
    return (
        <div className="mx-2"> 
            <InputGroup.Append className="my-1 mx-0">
                <Form.Control type="text" placeholder={props.tag} inline/>
                <Button variant="success" className="mx-1">cancel</Button>
                <Button variant="success">save</Button>
            </InputGroup.Append>
        </div>
        
    );
  
}

export default TagItem;