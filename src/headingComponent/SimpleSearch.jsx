import React from "react";
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

function SimpleSearch() {
  return (

    <>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="success">Search</Button>
      </Form>
    </>   
    
  );
}

export default SimpleSearch;
