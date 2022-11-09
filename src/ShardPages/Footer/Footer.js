import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/logo (2).png'

const Footer = () => {
    return (
        <footer className="footer mt-10 p-10 bg-black text-white">
            <div>
                <img className='h-20 w-20 md:ml-0 ml-4' src={logo} alt="" />
                <p><span className='text-secondary text-xl '>FooDies</span> Industries Ltd.<br />Providing reliable tech since 1992</p>
            </div>
            <div>
                <span className="footer-title">Services</span>
                <Link className="link link-hover">Branding</Link>
                <Link className="link link-hover">Design</Link>
                <Link className="link link-hover">Marketing</Link>
                <Link className="link link-hover">Advertisement</Link>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <Link className="link link-hover">About us</Link>
                <Link className="link link-hover">Contact</Link>
                <Link className="link link-hover">Jobs</Link>
                <Link className="link link-hover">Press kit</Link>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <Link className="link link-hover">Terms of use</Link>
                <Link className="link link-hover">Privacy policy</Link>
                <Link className="link link-hover">Cookie policy</Link>
            </div>
        </footer>
    );
};

export default Footer;