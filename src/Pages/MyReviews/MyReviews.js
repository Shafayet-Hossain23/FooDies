import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import LoadingSpinner from '../../components/LoadingSpinner';
import useTitle from '../../UseTitle/useTitle';
import Banner from '../Home/Banner/Banner';
import MyRvwChild from './MyRvwChild';

const MyReviews = () => {
    useTitle("Reviews")
    const [services, setServices] = useState([])
    const [loader, setLoader] = useState(true)
    useEffect(() => {
        fetch('https://foodies-server.vercel.app/services/count')
            .then(res => res.json())
            .then(data => {
                setServices(data.services)
                setLoader(false)
            })
    }, [])
    // console.log(services)
    // const { _id, serviceId, title, price, image_url, rating, details } = services
    if (loader) {
        return <LoadingSpinner></LoadingSpinner>
    }
    return (
        <div className='mb-20 lg:mx-0 mx-3' >
            <div className='mt-3'>
                <Banner></Banner>
            </div>
            <div className='mt-20' >
                <p className='text-3xl text-center font-bold mb-7'>Your All Review</p>
                <p className='my-2'>If you new,Please review us!</p>
            </div>
            <div>
                {
                    services.map(serv => <MyRvwChild
                        key={serv._id}
                        serv={serv}
                    ></MyRvwChild>)
                }
            </div>
        </div>
    );
};

export default MyReviews;