import React from 'react';
import useTitle from '../../UseTitle/useTitle';
import About from './About/About';
import Banner from './Banner/Banner';
import Services from './Services/Services';
import Team from './Team/Team';

const Home = () => {
    useTitle("Home")
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Team></Team>
        </div>
    );
};

export default Home;