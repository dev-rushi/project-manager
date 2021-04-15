import React from 'react'
import { Container,Form,Button } from 'react-bootstrap'
import  { Redirect , NavLink, withRouter , Link} from 'react-router-dom'

const Member = () => {


 
    return (
        <>
        <div className="col-6 justify-content-center ">
            <h1>ADD MEMBERS</h1>

                <Form className="ml-5">
                    <Form.Group className="p-3" controlId="exampleForm.ControlInput1">
                       <Form.Label className="h6">Member Name:</Form.Label>
                       <Form.Control type="text" placeholder="name" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                       <Form.Label className="h6">User Name:</Form.Label>
                       <Form.Control type="text" placeholder="username" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label className="h6">Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label className="h6">Role</Form.Label>
                        <Form.Control as="select">
                            <option>Tester</option>
                            <option>Designer</option>
                            <option>Developer</option>
                            <option>Production</option>
                        </Form.Control>
                    </Form.Group>
                </Form>
                <Button variant="primary">Add Member</Button> 
               <Link to="/manage-members"> <Button variant="danger" >Close</Button> </Link>
        </div>   
        </>
    );
}

export default Member
