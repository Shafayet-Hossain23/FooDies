import React from 'react';
import logo from '../../../Assets/logo (2).png'

const About = () => {
    return (
        <div className='my-10'>
            <div className='text-center mb-3'>
                <p className="text-4xl font-bold">About Us</p>
            </div>
            <div>
                <div className="hero">
                    <div className="hero-content flex-col lg:flex-row gap-14">
                        <div className=''>
                            <img src={logo} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold text-secondary">FooDies</h1>
                            <p className="py-3 text-justify	">We welcome you to sit back, unwind and appreciate the lovely sights and hints of the ocean while our best gourmet expert sets you up a scrumptious dinner utilizing the best and freshest ingredients. <span className='text-secondary'>FooDies</span> legacy comes from The parent  Restaurant which was built up in 2001. <br />
                                <span className='text-secondary'>FooDies</span> was worked for people in general and has advanced into a combination between exquisite chic and contemporary fine charge. <br />
                                Enjoy our dazzling dishes and make the most of your eating background with us!</p>
                            <button className="btn btn-secondary">Give Review</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;