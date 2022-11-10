import React from 'react';
import { FaStar } from 'react-icons/fa';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';

const ServiceItem = ({ service }) => {
    const { _id, title, price, image_url, rating, details } = service
    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl">
                <figure>
                    {/* <img src={image_url} className="w-full h-80" alt="" /> */}
                    <PhotoProvider>
                        <PhotoView src={image_url}>
                            <img title='Click image for full view' src={image_url} className="w-full h-80" alt="" />
                        </PhotoView>
                    </PhotoProvider>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p className='text-justify'>
                        {details.slice(0, 100)}...
                    </p>
                    <div className='flex justify-between'>
                        <div>Price:  <span className='font-bold'>${price}</span> </div>
                        <div className='text-secondary ml-40'>
                            {
                                rating?.number ? <><FaStar className='inline pb-1 pr-1 ' /> {rating.number}</> : <></>
                            }
                        </div>
                    </div>
                    <div className="card-actions mt-2 ">
                        <Link to={`services/${_id}`}>
                            <button className="btn btn-secondary">View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceItem;