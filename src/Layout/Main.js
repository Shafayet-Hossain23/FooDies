import React from 'react';
import { Outlet } from 'react-router-dom';
import ScrollToTop from '../components/ScrollToTop';
import Footer from '../ShardPages/Footer/Footer';
import Header from '../ShardPages/Header/Header';

const Main = () => {
    return (
        <div className='lg:mx-28'>
            <Header></Header>
            <ScrollToTop></ScrollToTop>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;