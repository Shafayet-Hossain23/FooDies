import React from 'react';
import './BannerItem.css'

const BannerItem = ({ image }) => {
    const { prev, img, id, next } = image
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='carousel-img'>
                <img src={img}
                    className="w-full banner-img" alt='' />
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href={`#slide${prev}`} className="btn btn-circle hover:bg-secondary">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle hover:bg-secondary">❯</a>
            </div>
            <div className=" text-center absolute  transform -translate-y-1/2 left-5 right-5 lg:top-2/3 top-3/4">
                <p className='text-white text-4xl font-bold '>Welcome to <span className='text-secondary'>FooDies</span> community!</p>
                <button className="btn w-36 mt-10 btn-outline btn-secondary">Give Reviews</button>
            </div>
            {/* <div className="absolute  transform -translate-y-1/2 left-5 right-5 top-2/3">
                <p className='text-white text-4xl font-bold'>Welcome to FoodDies community</p>
                <button className="btn w-28 btn-outline btn-secondary">Give Reviews</button>
            </div> */}
        </div>
    );
};

export default BannerItem;