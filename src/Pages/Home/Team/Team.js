import React from 'react';

const Team = () => {
    return (
        <div className='my-7'>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://contextbd.com/wp-content/uploads/2016/02/2nef.jpg")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Team Members</h1>
                        <p className="mb-5">The ability to achieve goals in the workplace requires collaboration with others. Whether you’re currently part of a team or preparing to join a new one, developing strong teamwork skills can help you to succeed in your career—no matter your level or industry.</p>
                        <button className="btn btn-secondary">Contact us</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;