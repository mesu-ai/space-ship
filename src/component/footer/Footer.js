import React from 'react';
import { Button, Container, Form, FormControl} from 'react-bootstrap';
import './Footer.css';
import logo from '../../images/logo.png';
import fb from '../../images/footer/fb.png';
import tw from '../../images/footer/tw.png';
import ln from '../../images/footer/ln.png';

const Footer = () => {

    const handleSubmit=(e)=>{
        e.preventDefault();
        
    }
    return (
        <div className='footerContainer'>
            <Container>
            <h2 className='newLetter'>Newsletter</h2>
            <Form className="d-flex justify-content-center flex-md-row flex-column" onSubmit={handleSubmit} >
                
                <input type="email" className="emailSubscribe mx-auto mx-md-0" placeholder="Email adress" />
                <div className='d-flex justify-content-center'><button type='submit' className='mt-md-0 mt-2  subscribBtn lastItem px-4'>Subscribe</button></div>
                
            </Form>

            <div className='d-flex flex-md-row flex-column justify-content-between align-items-center' style={{marginTop:'100px'}}>
                <div href="/" className='d-flex align-items-center'>
                    <img
                        alt="" 
                        src={logo}
                        width="51"
                        height="45"
                        className="d-inline-block align-top"
                    />
                    <span className="brandName">SPACE</span>
                </div>
                
                <div className='mt-md-0 mt-3'>
                    <p className='copyWrite'>Space 2020, All rights reserved.
                    </p>
                </div>
                
                <div>
                    <img src={tw} alt="" />
                    <img className='socialIcon' src={fb} alt="" />
                    <img src={ln} alt="" />


                </div>


            </div>
            </Container>
            
        </div>
    );
};

export default Footer;