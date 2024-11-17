import React from "react";
import logo from "../../assets/logo.png";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="border-b-2 flex justify-between items-center w-full p-3">
            <div className="bg-orange h-[60px] w-[60px] flex justify-center items-center rounded-xl logoshadow">
                <img src={logo} alt="Logo" className="h-[34px] w-[34px]" />
            </div>
        
            <div className="flex justify-center items-center space-x-0 flex-grow">
                <a href="#home">
                    <button className="bg-dark text-white px-6 py-2 rounded-lg font-semibold navbtn">Home</button>
                </a>
                <a href="#about">
                    <button className="px-6 py-2 rounded-lg font-semibold navbtn">About Us</button>
                </a>
                <a href="#pricing">
                    <button className="px-6 py-2 rounded-lg font-semibold navbtn">Pricing</button>
                </a>
                <a href="#blogs">
                    <button className="px-6 py-2 rounded-lg font-semibold navbtn">Blogs</button>
                </a>
                <a href="#contact">
                    <button className="px-6 py-2 rounded-lg font-semibold navbtn">Contact</button>
                </a>
                <button className="px-6 py-2 rounded-lg font-semibold navbtn">Feedback</button>
                <button className="px-6 py-2 rounded-lg font-semibold navbtn">Account</button>
            </div>
        
            <div className="flex items-center space-x-2">
                <Link to="/signup">
                    <button className="px-6 py-2 rounded-lg font-semibold btnhover">Sign Up</button>
                </Link>
                <Link to="/signin">
                    <button className="bg-orange text-white px-6 py-2 rounded-lg font-semibold btnhover">Login</button>
                </Link>
            </div>
        </div>
    );
}

export default Navbar;
