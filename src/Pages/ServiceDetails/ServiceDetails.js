import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { useLoaderData } from 'react-router-dom';
import Banner from '../Home/Banner/Banner';
import 'react-photo-view/dist/react-photo-view.css';
import { FaStar } from 'react-icons/fa';

const ServiceDetails = () => {
    const data = useLoaderData()
    const { _id, title, price, image_url, rating, details } = data
    // console.log(data)
    return (
        <div>

            <div className='my-10'>
                <div className="card w-full bg-base-100 shadow">
                    <figure>
                        {/* <img src={image_url} className="w-full h-80" alt="" /> */}
                        <PhotoProvider>
                            <PhotoView src={image_url}>
                                <img title='Click image for full view' src={image_url} className="w-full h-3/6" alt="" />
                            </PhotoView>
                        </PhotoProvider>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{title}</h2>
                        <p className='text-justify'>
                            {details}
                        </p>
                        <div className='flex justify-between'>
                            <div>Price:  <span className='font-bold'>${price}</span> </div>
                            <div className='text-secondary ml-40'>
                                {
                                    rating?.number ? <><FaStar className='inline pb-1 pr-1 ' /> {rating.number}</> : <p className='text-slate-300'>No rating available</p>
                                }
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default ServiceDetails;