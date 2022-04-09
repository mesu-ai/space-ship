import React from 'react';
import './Discover.css';
import bongo from '../../../images/discover/bongo.png'
import bd from '../../../images/discover/bd.png'
import m11 from '../../../images/discover/m11.png'
import { Card, Col, Container, Row } from 'react-bootstrap';
// import DiscoverCard from './discovercard/DiscoverCard';

const discovers=[
    {
        image:bongo,
        title:'Mission Bongo',
        text:'At PIAP Space, we believe that we can make Space and Earth cleaner, engineering, and delivering top-quality robotics solutions.'
    },
    {
        image:bd,
        title:'Mission BD',
        text:'At PIAP Space, we believe that we can make Space and Earth cleaner, engineering, and delivering top-quality robotics solutions.'
    },
    {
        image:m11,
        title:'Mission 11',
        text:'At PIAP Space, we believe that we can make Space and Earth cleaner, engineering, and delivering top-quality robotics solutions.'
    }
    
]

const Discover = () => {
    return (
        <div className='discoverContainer'>
        <Container>
            <p className='discoverTitle'>Discover Univerce</p>
            <Row xs={1} md={3} className="g-4 cardContainer">
                {discovers.map((mission, idx) => (
                    <Col key={Math.random()}>
                    <Card className={`px-3 py-4 ${idx===1?'missionCardS':'missionCardN'}`}>
                        <Card.Img variant="top" className='missionImg mx-auto' src={mission.image} />
                            <Card.Body className='p-0'>
                            <Card.Title className='missionTitle'>{mission.title}</Card.Title>
                            <Card.Text className='missionText'>
                                {mission.text}
                            </Card.Text>
                            </Card.Body>
                        </Card>
                </Col>  
                ))}
            </Row>
            
        </Container>
        </div>
    );
};

export default Discover;