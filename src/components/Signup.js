// src/components/Signup.js
import React from "react";
import GoogleLogo from "../assets/Google.png";
import FacebookLogo from "../assets/Facebook.png";
import ArtImage from "../assets/Art.jpg";
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className="max-w-7xl h-screen mx-auto flex justify-around">
      <div className="w-1/2 flex flex-col justify-center items-center">
        <div className="flex flex-col w-[320px] justify-center">
          <div className="text-3xl font-semibold mb-4">
            Get Started!
          </div>
          <div>
            <div className="text-md mb-2">Sign up now and begin shaping you</div>
            <div className="text-md">educational future.</div>
          </div>

          <div className="mt-10">
            <form className="flex flex-col">
            <div><label htmlFor="username" className="font-semibold text-sm">Username</label></div>
            <div className="mb-4"><input type="text" id="username" name="username" placeholder="Enter username" className="p-2 rounded-lg text-sm bg-lightblue w-full inputborder" required /></div>

              <div><label htmlFor="email" className="font-semibold text-sm">Email</label></div>
              <div className="mb-4"><input type="text" id="email" name="email" placeholder="Example@gmail.com" className="p-2 rounded-lg text-sm bg-lightblue w-full inputborder" required /></div>

              <div>
                <label htmlFor="password" className="font-semibold text-sm">Password</label></div>
              <div><input type="password" id="password" name="password" placeholder="At least 8 characters" className="p-2 rounded-lg text-sm bg-lightblue w-full inputborder" required /></div>
            </form>
          </div>

          <div>
          <Link to="/verify">
            <button className="bg-dark text-white flex justify-center items-center p-3 rounded-xl w-full btnhover mt-4 mb-4">
              Sign in
            </button>
            </Link>

            <div className="flex justify-center items-center mt-12">
              <div className="h-[2px] w-full bg-grey rounded-full"></div>
              <div className="ml-2 mr-2 font-semibold"> Or </div>
              <div className="h-[2px] w-full bg-grey rounded-full"></div>
            </div>

            <div className="mt-8">
              <button className="flex text-black bg-grey items-center justify-center text-center font-semibold p-3 rounded-xl w-full mb-4 btnhover">
                <img src={GoogleLogo} alt="Google logo" className="logo" />
                <div className="ml-2 flex justify-center text-center">Sign in with Google</div>
              </button>
            </div>
            <div>
              <button className="flex text-black bg-grey items-center justify-center text-center font-semibold p-3 rounded-xl w-full btnhover">
                <img src={FacebookLogo} alt="Facebook logo" className="logo" /> 
                <div className="ml-2 flex justify-center text-center">Sign in with Facebook</div>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-1/2 flex justify-center items-center p-4">
        <img src={ArtImage} alt="Art" className="rounded-3xl" />
      </div>
    </div>

  );
};

export default Signup;
