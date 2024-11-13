import React from "react";
import logo from "../assets/logo.png";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="border-b-2 flex justify-between items-center w-full p-3">
        <div className="bg-orange h-[60px] w-[60px] flex justify-center items-center rounded-xl logoshadow">
          <img src={logo} alt="Logo" className="h-[34px] w-[34px]" />
        </div>
      
        <div className="flex justify-center items-center space-x-0 flex-grow"> {/* Added space-x-2 and flex-grow */}
          <button className="bg-dark text-white px-6 py-2 rounded-lg font-semibold">Home</button>
          <button className="px-6 py-2 rounded-lg font-semibold">About Us</button>
          <button className="px-6 py-2 rounded-lg font-semibold">Pricing</button>
          <button className="px-6 py-2 rounded-lg font-semibold">Blogs</button>
          <button className="px-6 py-2 rounded-lg font-semibold">Contact</button>
          <button className="px-6 py-2 rounded-lg font-semibold">Feedback</button>
          <button className="px-6 py-2 rounded-lg font-semibold">Account</button>
        </div>
      
        <div className="flex items-center space-x-2"> {/* Added space-x-2 for margin */}
        <Link to="/signup">
          <button className="px-6 py-2 rounded-lg font-semibold">Sign Up</button>
        </Link>
        <Link to="/signin">
          <button className="bg-orange text-white px-6 py-2 rounded-lg font-semibold">Login</button>
        </Link>
        </div>
      </div>
      
      
    )
}

export default Navbar;