import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import LoadingSpinner from '../../../components/LoadingSpinner';
import ServiceItem from './ServiceItem';

const Services = () => {
    const [services, setServices] = useState([])
    const [count, setCount] = useState(0)
    // const [page, setPage] = useState(0);
    const [size, setSize] = useState(3);
    const [loader, setLoader] = useState(true)

    useEffect(() => {
        const url = `https://foodies-server.vercel.app/services?size=${size}`;
        // console.log(page, size);
        fetch(url)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setCount(data.count);
                setServices(data.services);
                setLoader(false)
            })
    }, [size])
    if (loader) {
        return <LoadingSpinner></LoadingSpinner>
    }
    // const pages = Math.ceil(count / size);
    return (
        <div>
            <div>
                <p className="text-4xl font-bold text-center mb-8">Our Services</p>
            </div>
            {/* <div className='text-center my-4'>
                {loader && <div className="radial-progress text-secondary" style={{ "--value": 70 }}></div>}
            </div> */}
            <div className='grid lg:grid-cols-2 grid-cols-1 w-full gap-10'>
                {
                    services.map(service => <ServiceItem
                        key={service._id}
                        service={service}
                    ></ServiceItem>)
                }
            </div>
            <div className='flex justify-center my-7'>
                {
                    services.length === 3 ? <>
                        <button onClick={() => setSize(count)} className="btn btn-outline btn-secondary w-44">See All</button>
                    </> : <p className='text-slate-300'>All services are displayed.</p>
                }
            </div>


        </div >
    );
};

export default Services;