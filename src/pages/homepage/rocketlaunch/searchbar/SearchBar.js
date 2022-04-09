import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import './SearchBar.css';

const SearchBar = ({handleSelect}) => {

   

    return (
        <Container>

        <Navbar expand="lg" variant="dark" style={{backgroundColor:'#2D2853'}}>
        <Container>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">

            <Nav className="me-auto ">


            <div className='d-flex align-items-center'>
                <label className='filterLabel'>Is upcoming?</label>
                <li className='ms-4'>
                <Form.Select onChange={handleSelect} aria-label="Is upcoming?" className='custom-select'>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>   
                </Form.Select>
                </li>
            </div>

            <span className='searchBarDivider mx-4 d-none d-md-block'></span>

            <div className='d-flex align-items-center'>
                <label className='filterLabel'>Launch year?</label>
                <li className='ms-4'>
                <Form.Select aria-label="Is upcoming?" className='custom-select'>
                    <option value="1">Yes</option>
                    <option value="2">No</option>   
                </Form.Select>
                </li>
            </div>
               
            </Nav>
            <Form className="d-flex">
                <FormControl
                type="search"
                placeholder="Search for rocket"
                className="searchField"
                aria-label="Search"
                />
                <Button variant="dark" className='searchBtn px-4'>Search</Button>
            </Form>

            </Navbar.Collapse>
        </Container>
        </Navbar>
        </Container>
    );
};

export default SearchBar;