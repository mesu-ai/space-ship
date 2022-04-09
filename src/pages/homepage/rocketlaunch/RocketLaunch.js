import React, { useEffect, useState } from 'react';
import SearchBar from './searchbar/SearchBar';
import './RocketLaunch.css';
import { Card, Col, Container, Row } from 'react-bootstrap';

const RocketLaunch = () => {
    const [rockets,setRockets]=useState([]);
    const [displayRockets,setDisplayRockets]=useState([])
    useEffect(()=>{
        fetch('https://api.spacexdata.com/v3/launches')
        .then(res=>res.json())
        .then(data=>{
            setRockets(data);
            
            const upcommingLaunch=data.filter(rocket=>rocket.upcoming===true);
            setDisplayRockets(upcommingLaunch);
        
        })
        
    },[])

    // console.log(rockets);

    const handleSelect=(e)=>{

        const value=e.target.value;
        console.log(value);
        
        if(value==='yes'){
            const upcommingLaunch=rockets.filter(rocket=>rocket.upcoming===true);
            setDisplayRockets(upcommingLaunch);
        }else{
            const upcommingLaunch=rockets.filter(rocket=>rocket.upcoming===false);
            setDisplayRockets(upcommingLaunch);

        }

    }




    return (
        <div className='launchContainer'>
            <SearchBar handleSelect={handleSelect}/>
            <Container>
            <Row xs={1} md={3} lg={4} className="g-4 cardContainer">
                {displayRockets.map((rocket, idx) =>(
                    <Col key={Math.random()}>
                    <Card className='px-3 py-4 missionCardN h-100'>
                        <Card.Img variant="top" className='rocketImg mx-auto' src={rocket.links.mission_patch_small} />
                            <Card.Body className='p-0'>
                            <Card.Title className='missionTitle mb-3'>{rocket.mission_name}</Card.Title>
                            
                            <Card.Text className='missionText mb-2'>
                                Rocket name: {rocket.mission_name}
                            </Card.Text>
                            <Card.Text className='missionText mb-2'>
                                Launch year: {rocket?.launch_year}
                            </Card.Text>
                            <Card.Text className='missionText mb-2'>
                                Upcoming: {rocket.upcoming===false ? 'false':'true'}
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

export default RocketLaunch;