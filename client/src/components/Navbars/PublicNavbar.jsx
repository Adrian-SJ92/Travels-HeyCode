import React from 'react';
import { Button, Container, Navbar, Nav } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

export const PublicNavbar = () => {
  const navigate = useNavigate();
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/" href="#action1">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" href="#action2">
              About
            </Nav.Link>
          </Nav>
          <div className='d-flex gap-2'>
            <Button variant="outline-success" onClick={()=>navigate("/login")}>Login</Button>
            <Button variant="outline-success" onClick={()=>navigate("/register")}>Register</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
