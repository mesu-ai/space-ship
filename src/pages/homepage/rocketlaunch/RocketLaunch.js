import React, { useEffect, useState } from 'react';
import SearchBar from './searchbar/SearchBar';
import './RocketLaunch.css';
import { Card, Col, Container, Row, Spinner } from 'react-bootstrap';
import PostPagination from './postpagination/PostPagination';

const RocketLaunch = () => {
    const [rockets,setRockets]=useState([]);
    const [displayRockets,setDisplayRockets]=useState([]);
    const [showRockets,setShowRockets]=useState([]);
    const [searchRocket,setSearchRocket]=useState(false);

    const [launchYear,setLaunchYear]=useState([]);
    
    const [loading,setLoading]=useState(false);

    const [currentPage,setCurrentPage]=useState(1);
    const [postsPerPage]= useState(8);
    
    

    useEffect(()=>{
         setLoading(true);
        fetch('https://api.spacexdata.com/v3/launches')
        .then(res=>res.json())
        .then(data=>{
            setRockets(data);
            setDisplayRockets(data);
            
            
            // get current posts
            const indexOfLastPost= currentPage * postsPerPage;
            const indexOfFirstPost= indexOfLastPost - postsPerPage;
            const currentPost= data.slice(indexOfFirstPost,indexOfLastPost);

            setShowRockets(currentPost);

             setLoading(false);

        
        })
        
    },[currentPage, postsPerPage])

    
    const handleSearch=(searchText)=>{
        // const searchText=e.target.value;
         setLoading(true);
        console.log(searchText);
        const findRockets=rockets.filter(rocket=>rocket.rocket.rocket_name.toLowerCase().includes(searchText.toLowerCase()));
        

        if(findRockets){
            checkPagination(findRockets);
            // setLoading(false);

        }else{
            setSearchRocket(true);
             setLoading(false);
            
        }

        
        

    }

    
    const handleUpcoming=(e)=>{

        const value=e.target.value;
        // console.log(value);
        
        if(value==='yes'){
            
            
            const upcomingLaunch=rockets.filter(rocket=>rocket.upcoming===true);
            if(upcomingLaunch){
                 setCurrentPage(1);
                 checkPagination(upcomingLaunch,1);
                 paginate(1)
                 console.log('yes',upcomingLaunch);

            }
            
            
        }else if(value==='no'){
            const upcomingLaunch=rockets.filter(rocket=>rocket.upcoming===false);

            if(upcomingLaunch){
                checkPagination(upcomingLaunch);
                console.log('no',upcomingLaunch);

            }
            

        }

    }

   



    const handleLaunchYear=(e)=>{
        
        const value=e.target.value;
        // console.log(value);

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
        else{
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


    const checkPagination = React.useCallback((data,cPage=currentPage) => { 
            setLoading(true);

        
           if(data){
            // console.log('ckPage',data);
            // console.log('pagi', Math.ceil(data.length/postsPerPage));
            // setDisplayRockets(data);
         
            const indexOfLastPost= cPage * postsPerPage;
            const indexOfFirstPost= indexOfLastPost - postsPerPage;
            
           // console.log('CP',cPage, 'fir',indexOfFirstPost,'las',indexOfLastPost);
            
            const currentPost= data.slice(indexOfFirstPost,indexOfLastPost);
            
            if(currentPost){
           // console.log('sh',currentPost);
            setShowRockets(currentPost);

            setLoading(false);

            }else{
                return;
            } 

           }
           
            
        }, [currentPage, postsPerPage]);
    

    useEffect(()=>{
         setLoading(true);

        for (const year of launchYear) {
           
            const upcomingLaunch=rockets.filter(rocket=>rocket.launch_year===`${year}`);

            if(upcomingLaunch){
               // console.log(upcomingLaunch);
                
                checkPagination(upcomingLaunch);
                setDisplayRockets(upcomingLaunch);
                setLoading(false);
                

            }

            
            
        }
        setLoading(false);


    },[checkPagination, launchYear, rockets]);


    const paginate=(pageNumber)=>{
        
            setCurrentPage(pageNumber);
        
       // console.log(pageNumber);
    }



    return (
        <div className='launchContainer'>
            <SearchBar handleUpcoming={handleUpcoming} handleLaunchYear={handleLaunchYear} handleSearch={handleSearch}S/>
            
            {loading? 
            <>
            <Spinner animation="border" variant="danger" className='mt-5'/>
            <p className='text-light'>Data Loading...</p>
            </>:<></>
             }

             {searchRocket &&
             <h2 className='text-light mt-5'>No Rocket Found !</h2>
             
             }
            <Container>
            <Row xs={1} md={3} lg={4} className="g-4 cardContainer">
                {showRockets.map((rocket, idx) =>(
                    <Col key={Math.random()}>
                    <Card className='px-3 py-4 missionCardN h-100'>
                        <Card.Img variant="top" className='rocketImg mx-auto' src={rocket.links.mission_patch_small} />
                            <Card.Body className='p-0'>
                            <Card.Title className='missionTitle mb-3'>{rocket.mission_name}</Card.Title>
                            
                            <Card.Text className='missionText mb-2'>
                                Rocket name: {rocket?.rocket?.rocket_name}
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

            <div className="mt-5 d-flex justify-content-center">
                
                <PostPagination postsPerPage={postsPerPage} totalPosts={displayRockets.length} paginate={paginate}/>
                 
    
            </div>

            </Container>
        </div>
    );
};

export default RocketLaunch;