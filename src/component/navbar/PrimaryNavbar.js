import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import logo from '../../images/logo.png';
import './PrimaryNavbar.css';

const PrimaryNavbar = () => {
    return (
        <Navbar collapseOnSelect  sticky="top" expand="lg"  bg="#1E1B3A
        " variant="dark">
        <Container >
        <Navbar.Brand href="/" className='d-flex align-items-center'>
          <img
            alt="" 
            src={logo}
            width="51"
            height="45"
            className="d-inline-block align-top"
          />{' '}
          <span className="brandName">SPACE</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        
        <Nav className="ms-auto d-flex align-items-lg-center align-items-start">
           <NavLink className='navItem' as={HashLink} to='/home'>Home</NavLink>
           <NavLink className='navItem my-lg-0 my-2' as={HashLink} to='/home'>About Us</NavLink>
           <NavLink className='navItem ' as={HashLink} to='/home'>Story</NavLink>
           <NavLink className='navItem my-lg-0 my-2' as={HashLink} to='/home'>Blog</NavLink>
           <NavLink className='navItem' as={HashLink} to='/home'>Contract Us</NavLink>

      
        </Nav>

        <Nav className="d-flex justify-content-center align-items-center fw-bold">
    
        
        </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>
    );
};

export default PrimaryNavbar;