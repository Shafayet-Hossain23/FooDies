import React from 'react';

const Review = ({ review }) => {
    const { name, image, email, text } = review
    return (
        <div className='border mt-3 p-3 rounded'>
            <div>
                <img className='rounded-full inline w-7 h-7' src={image} alt="" />
                <p className='inline ml-2 font-bold'>{name}</p>
            </div>
            <div className='ml-7 mt-2'>
                {text}
            </div>
        </div>
    );
};

export default Review;