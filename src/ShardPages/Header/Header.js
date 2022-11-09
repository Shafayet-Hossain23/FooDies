import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const ListItems = <>
        <li className='hover:text-secondary'><Link to='/'>Home</Link></li>
        <li className='hover:text-secondary'><Link to='/blog'>Blog</Link></li>
        <li className='hover:text-secondary'><Link to='/myreviews'>My Reviews</Link></li>
        <li className='hover:text-secondary'><Link to='/addservices'>Add Services</Link></li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {ListItems}
                    </ul>
                </div>
                <Link className="btn text-secondary btn-ghost normal-case text-2xl">FooDies</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {ListItems}
                </ul>
            </div>
            <div className="navbar-end">
                <Link to='/login'><button className="btn w-28 btn-outline btn-secondary">Login</button></Link>
            </div>
        </div>
    );
};

export default Header;