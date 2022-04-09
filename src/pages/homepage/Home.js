import React from 'react';
import './Home.css';
import Banner from './banner/Banner';
import Discover from './discover/Discover';
import RocketLaunch from './rocketlaunch/RocketLaunch';

const Home = () => {
    return (
        <>
        <Banner/>
        <Discover/>
        <RocketLaunch/>
        </>
    );
};

export default Home;