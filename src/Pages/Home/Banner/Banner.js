import React from 'react';
import img1 from '../../../Assets/banner/img1.jpg'
import img2 from '../../../Assets/banner/img4.jpg'
import img3 from '../../../Assets/banner/img5.jpg'
import img4 from '../../../Assets/banner/img6.jpg'
import BannerItem from './BannerItem';

const Banner = () => {
    const imgData = [
        {
            prev: 3,
            id: 1,
            img: img1,
            next: 2
        },
        {
            prev: 1,
            id: 2,
            img: img3,
            next: 3
        },
        {
            prev: 2,
            id: 3,
            img: img4,
            next: 1
        },
    ]
    return (
        <div className="carousel w-full">
            {
                imgData.map(image => <BannerItem
                    key={image.id}
                    image={image}
                >
                </BannerItem>)
            }
        </div>
    );
};

export default Banner;