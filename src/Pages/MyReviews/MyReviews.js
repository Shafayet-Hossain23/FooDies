import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import useTitle from '../../UseTitle/useTitle';
import Banner from '../Home/Banner/Banner';
import MyRvwChild from './MyRvwChild';

const MyReviews = () => {
    useTitle("Reviews")
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://foodies-server.vercel.app/services/count')
            .then(res => res.json())
            .then(data => setServices(data.services))
    }, [])
    // console.log(services)
    // const { _id, serviceId, title, price, image_url, rating, details } = services
    return (
        <div className='mb-20' >
            <div>
                <Banner></Banner>
            </div>
            <div className='mt-20' >
                <p className='text-3xl text-center font-bold'>Your All Review</p>
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