import React from 'react'
import { Container,Form,Button } from 'react-bootstrap'
const Addtask = () => {
    return (
        <>
        <header className="App-header">
            <h1>ADD MEMBERS</h1>
            <Container fluid>
                <Form className="">
                    <Form.Group controlId="exampleForm.ControlInput1">
                       <Form.Label>Task Name:</Form.Label>
                       <Form.Control type="text" placeholder="name" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Task Description:</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Assigned To</Form.Label>
                        <Form.Control as="select">
                            <option>designer</option>
                            <option>tester</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Priority</Form.Label>
                        <Form.Control as="select">
                            <option>HIGH</option>
                            <option>MEDIUM</option>
                            <option>LOW</option>
                        </Form.Control>
                    </Form.Group>
                </Form>
                <Button variant="primary">Submit</Button> <Button variant="danger">Close</Button> 
            </Container> 
        </header>   
        </>
    );
}

export default Addtask
