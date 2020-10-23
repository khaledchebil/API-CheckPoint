import React from 'react'
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './App.css';

const Navb = () => {
    return (
        <div>
              <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">User List</Navbar.Brand>
    <Nav className="mr-auto">
          <Link className='ma2 pa2 ko' to='/'>Home </Link>
          <Link className='ma2 pa2 ko' to='/users'>Users </Link>
          <Link className='ma2 pa2 ko' to='/'>Admin </Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
        </div>
    )
}

export default Navb
