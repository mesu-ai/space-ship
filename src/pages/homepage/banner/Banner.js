import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Banner.css';
import asset from '../../../images/Asset.png';
import earth from '../../../images/earth.png';
import box from '../../../images/box.png';
import circle from '../../../images/circle.png';
import light from '../../../images/light.png';

const Banner = () => {
    return (
        <>
        <img className='bannerBox' src={box} alt="" />
        <img className='bannerLight' src={light} alt="" />

        <Container>
        <Row className='d-flex align-items-center'>
            <Col xs={12} md={5}>
            
              <div className='d-flex justify-content-start align-items-center p-3'>
                  <img className='bannerWcImg' src={earth} alt="" />
                  <p className='bannerWc'>Welcome to Stella</p>

              </div>
              
              <p className='bannerTitle'>SPACE FOR <br /> EVERYONE</p>
              <p className='bannerBody'>At PIAP Space, we believe that we can make Space and Earth cleaner, engineering, and delivering top-quality robotics solutions.</p>

              <button className='bannerBtn'>GET START</button>


            </Col>
            <Col xs={12} md={7}>
              <img className='bannerImg' src={asset} alt="" />
            </Col>
          </Row>
          </Container>
          </>
    );
};

export default Banner;