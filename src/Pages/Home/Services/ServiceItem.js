import React from 'react';
import { FaStar } from 'react-icons/fa';

const ServiceItem = ({ service }) => {
    const { title, price, image_url, rating, details } = service
    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl">
                <figure><img src={image_url} className="w-full h-80" alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p className='text-justify'>
                        {details.slice(0, 100)}...
                    </p>
                    <div className='flex justify-between'>
                        <p>Price:  <span className='font-bold'>${price}</span> </p>
                        <p className='text-secondary ml-40'>
                            {
                                rating?.number ? <><FaStar className='inline pb-1 pr-1 ' /> {rating.number}</> : <>No rating available</>
                            }
                        </p>
                    </div>
                    <div className="card-actions mt-2 ">
                        <button className="btn btn-secondary">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceItem;