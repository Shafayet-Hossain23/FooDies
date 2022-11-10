import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
const Review = ({ review }) => {
    const { name, image, email, text } = review
    // console.log(image)
    return (
        <div className='border mt-3 p-3 rounded'>
            <div>
                {/* <FaUserCircle className='rounded-full inline w-7 h-7'></FaUserCircle> */}
                {
                    image ? <img className='rounded-full inline w-7 h-7' src={image} alt="" /> : <FaUserCircle className='rounded-full inline w-7 h-7'></FaUserCircle>
                }
                <p className='inline ml-2  font-bold'>{name}</p>
            </div>
            <div className='ml-7 mt-2'>
                {text}
            </div>
        </div>
    );
};

export default Review;