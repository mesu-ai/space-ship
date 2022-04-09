import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import './SearchBar.css';

const SearchBar = ({handleUpcoming,handleLaunchYear,handleSearch}) => {

    const handleSubmit=(e)=>{
        
       const value= document.getElementById('searchText').value;

        
        handleSearch(value);
        


        e.preventDefault();
    }

   

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
                
                <Form.Select onChange={handleUpcoming} aria-label="Is upcoming?" className='custom-select'>
                    {/* <option value="select">Select</option> */}
                    <option value="yes">Yes</option>
                    <option value="no">No</option>   
                </Form.Select>
                </li>
            </div>

            <span className='searchBarDivider mx-4 d-none d-md-block'></span>

            <div className='d-flex align-items-center'>
                <label className='filterLabel'>Launch year?</label>
                <li className='ms-4'>
                
                <Form.Select onChange={handleLaunchYear} aria-label="Is upcoming?" className='custom-select'>

                {/* <option value="select">Select</option> */}
                <option value="Gt20">Greater Than 2020</option>
                <option value="16-20">2016 - 2020</option>
                <option value="11-15">2011 - 2015</option>
                <option value="6-10">2006 - 2010</option>
                <option value="1-5">2001 - 2005</option> 
                <option value="96-00">1996 - 2000</option>
                <option value="91-95">1991 - 1995</option>
                <option value="90Lt">Less Than 1990</option>          
                </Form.Select>
                </li>
            </div>
               
            </Nav>
            <Form className="d-flex" onSubmit={handleSubmit} >
                <FormControl
                id='searchText'
                type="search"
                placeholder="Search for rocket"
                className="searchField"
                aria-label="Search"
                name='search'
                
                
                />
                <Button type='submit' variant="dark" className='searchBtn px-4'>Search</Button>
            </Form>

            </Navbar.Collapse>
        </Container>
        </Navbar>
        </Container>
    );
};

export default SearchBar;