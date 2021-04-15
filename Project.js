import React from 'react'
import {Container, Form,Button} from 'react-bootstrap';
const Project = () => {
    return (
        <>
        <header className="mx-auto App-header">
            <h1>PROJECT</h1>
            <Container>
                <Form className="w-100">
                  <Form.Group controlId="exampleForm.ControlInput1">
                   <Form.Label>Project Name:</Form.Label>
                   <Form.Control type="text" placeholder="Project1" />
                 </Form.Group>
                 <Form.Group controlId="dob">
                   <Form.Label>Starting Date</Form.Label>
                   <Form.Control type="date" name="dob" placeholder="" />
                 </Form.Group>
                 <Form.Group controlId="dob">
                   <Form.Label>Expected-End Date</Form.Label>
                   <Form.Control type="date" name="dob" placeholder="" />
                 </Form.Group>
                 <Button variant="info">Add-Members</Button>
                </Form>
              <Button variant="primary" type="submit" size="lg" block>Submit</Button>
            </Container>
        </header>   
        </>
    );
};

export default Project

