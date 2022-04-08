import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';

const PrimaryNavbar = () => {
    return (
        <Navbar collapseOnSelect  sticky="top" expand="lg"  variant="light">
        <Container>
        <Navbar.Brand href="/">
        <img
          alt="" 
          src=''
          width="35"
          height="35"
          className="d-inline-block align-top"
        />{' Space'}
     {/* <span className="fw-bold fs-4"><span className="text-danger">Tour</span> Explorer</span> */}
      </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        
        <Nav className="ms-auto nav-conatainer d-flex align-items-center">
           <Nav.Link as={HashLink} to='/home'>Home</Nav.Link>
           <Nav.Link as={HashLink} to='/home'>Home</Nav.Link>
           <Nav.Link as={HashLink} to='/home'>Home</Nav.Link>
           <Nav.Link as={HashLink} to='/home'>Home</Nav.Link>

            <NavDropdown title="Manage Service" id="collasible-nav-dropdown">
            <NavDropdown.Item  as={HashLink}  to="/tour/add">Add Tour Package</NavDropdown.Item>
            <NavDropdown.Item  as={HashLink}  to="/tour/managetour">Manage Tour Package</NavDropdown.Item>
            <NavDropdown.Item as={HashLink} to="/mybooking">My Booking</NavDropdown.Item> 
            <NavDropdown.Item as={HashLink} to="/bookingmanage">Manage Booking</NavDropdown.Item>
            <NavDropdown.Divider />
            </NavDropdown>
      
        </Nav>

        <Nav className="d-flex justify-content-center align-items-center fw-bold">
    
        
        </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>
    );
};

export default PrimaryNavbar;