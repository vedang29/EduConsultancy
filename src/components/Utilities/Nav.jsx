import React from 'react'
import signout from '../../assets/signout.png'
import user from '../../assets/user.png'
import logo from "../../assets/logo.png";
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="border-b-2 flex justify-between items-center w-full p-3">
      <Link to="/home">
        <div className="bg-orange h-[60px] w-[60px] flex justify-center items-center rounded-xl logoshadow">
          <img src={logo} alt="Logo" className="h-[34px] w-[34px]" />
        </div>
      </Link>


      <div className="flex justify-center items-center space-x-0 flex-grow"> {/* Added space-x-2 and flex-grow */}
        <button className="bg-dark text-white px-6 py-2 rounded-lg font-semibold navbtn">Home</button>
        <Link to="/about">
          <button className="px-6 py-2 rounded-lg font-semibold navbtn">About Us</button>
        </Link>
        <Link to="/pricing">
        <button className="px-6 py-2 rounded-lg font-semibold navbtn">Pricing</button>
        </Link>
        <Link to="/blogs">
          <button className="px-6 py-2 rounded-lg font-semibold navbtn">Blogs</button>
        </Link>

        <Link to="/contact">
          <button className="px-6 py-2 rounded-lg font-semibold navbtn">Contact</button>
        </Link>

        <Link to="/feedback">
          <button className="px-6 py-2 rounded-lg font-semibold navbtn">Feedback</button>
        </Link>

        <button className="px-6 py-2 rounded-lg font-semibold navbtn">Account</button>
      </div>

      <div className="flex items-center space-x-2 justify-center gap-2"> {/* Added space-x-2 for margin */}
        <Link to="/">
          <button className="rounded-full p-3 font-semibold btnhover">
            <img src={signout} alt="Description" className="w-5 h-5" />
          </button>
        </Link>
        <Link to="/dashboard">
          <button className="bg-orange text-white p-3 rounded-full btnhover font-semibold">
            <img src={user} alt="Description" className="w-5 h-5" />
          </button>
        </Link>
      </div>
    </div>


  )
}

export default Nav