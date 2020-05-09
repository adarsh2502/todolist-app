import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";



function ListItem(props){
    return (
        
            <InputGroup.Append className="my-1 mx-3">
                <Form.Control type="text" placeholder={props.item} inline/>
                <Button variant="success" className="mx-1">cancel</Button>
                <Button variant="success">save</Button>
            </InputGroup.Append>

        
    );
  
}


export default ListItem;
