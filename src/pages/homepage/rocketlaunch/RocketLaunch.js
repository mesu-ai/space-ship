import React, { useEffect, useState } from 'react';
import SearchBar from './searchbar/SearchBar';
import './RocketLaunch.css';
import { Card, Col, Container, Row } from 'react-bootstrap';

const RocketLaunch = () => {
    const [rockets,setRockets]=useState([]);
    const [displayRockets,setDisplayRockets]=useState([]);
    const [launchYear,setLaunchYear]=useState([]);
    useEffect(()=>{
        fetch('https://api.spacexdata.com/v3/launches')
        .then(res=>res.json())
        .then(data=>{
            setRockets(data);
            setDisplayRockets(data);

            // const upcommingLaunch=data.filter(rocket=>rocket.upcoming===true);
            // setDisplayRockets(upcommingLaunch);
        
        })
        
    },[])

    // console.log(rockets);

    const handleUpcoming=(e)=>{

        const value=e.target.value;
       // console.log(value);
        
        if(value==='yes'){
            const upcomingLaunch=rockets.filter(rocket=>rocket.upcoming===true);
            setDisplayRockets(upcomingLaunch);
        }else{
            const upcomingLaunch=rockets.filter(rocket=>rocket.upcoming===false);
            setDisplayRockets(upcomingLaunch);

        }

    }

    const handleLaunchYear=(e)=>{
        const value=e.target.value;
        console.log(value);

        if(value==='Gt20'){
            const date=new Date();
            const currYear=date.getFullYear();
          
            searchLaunch(2021,currYear);
 
        }
        else if(value==='16-20'){
            searchLaunch(2016,2020);
        }
        else if(value==='11-15'){
            searchLaunch(2011,2015);
        }
        else if(value==='6-10'){
            
            searchLaunch(2006,2010);
        }
        else if(value==='1-5'){
            searchLaunch(2001,2005);
        }
        else if(value==='96-00'){
            searchLaunch(1996,2000);
        }
        else if(value==='91-95'){
            searchLaunch(1991,1995);
        }
        else if(value==='90Lt'){
            searchLaunch(1900,1990);
        }

    }

    const searchLaunch=(start,end)=>{

        setLaunchYear({});
        const newlaunchYear=[];
              
        for(let year=start;year<=end;year++){
           newlaunchYear.push(year);

        }

        // console.log(newlaunchYear);
        setLaunchYear(newlaunchYear);
    
    }
    

    useEffect(()=>{

        for (const year of launchYear) {
           
            const upcomingLaunch=rockets.filter(rocket=>rocket.launch_year===`${year}`);

            if(upcomingLaunch){
                setDisplayRockets(upcomingLaunch);
            }
            
        }


    },[launchYear, rockets])




    return (
        <div className='launchContainer'>
            <SearchBar handleUpcoming={handleUpcoming} handleLaunchYear={handleLaunchYear}/>
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