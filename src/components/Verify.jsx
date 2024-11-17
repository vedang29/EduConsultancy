import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import GoogleLogo from "../assets/Google.png";
import FacebookLogo from "../assets/Facebook.png";
import ArtImage from "../assets/Art.jpg";

const Verify = () => {
    const inputRefs = useRef([]);

    const handleInputChange = (e, index) => {
        const value = e.target.value;

        // Only accept numeric input and move focus to the next box
        if (/^\d$/.test(value)) {
            if (index < inputRefs.current.length - 1) {
                inputRefs.current[index + 1].focus();
            }
        } else {
            e.target.value = ''; // Clear invalid input
        }
    };

    const handleKeyDown = (e, index) => {
        // Handle backspace
        if (e.key === 'Backspace' && index > 0 && !e.target.value) {
            inputRefs.current[index - 1].focus();
        }
    };

    return (
        <div className="max-w-7xl h-screen mx-auto flex justify-around">
            <div className="w-1/2 flex flex-col justify-center items-center">
                <div className="flex flex-col w-[324px] justify-center">
                    <div className="text-3xl font-semibold mb-4">
                        Enter Verification Code
                    </div>
                    <div>
                        <div className="text-md mb-2">Enter the 6-digit code sent to your email</div>
                    </div>

                    <div className="mt-10">
                        <form className="flex flex-col">
                            <div>
                                <label htmlFor="otp" className="font-semibold text-sm">6-digit code</label>
                            </div>
                            <div className="flex gap-2 mt-3">
                                {[...Array(6)].map((_, index) => (
                                    <div key={index} className="mb-4">
                                        <input
                                            type="text"
                                            maxLength="1"
                                            className="p-2 rounded-lg text-sm bg-lightblue w-10 h-10 text-center inputborder"
                                            ref={el => (inputRefs.current[index] = el)}
                                            onChange={(e) => handleInputChange(e, index)}
                                            onKeyDown={(e) => handleKeyDown(e, index)}
                                            required
                                        />
                                    </div>
                                ))}
                            </div>
                        </form>
                    </div>

                    <div>
                        <div className="flex justify-center items-center">
                            <div>Didn’t receive the code?</div>
                            <button className="text-blue-800 font-semibold text-right mt-4 mb-4 ml-2">
                                Resend
                            </button>
                        </div>

                        <Link to="/home">
                            <button className="bg-dark text-white flex justify-center items-center p-3 rounded-xl w-full btnhover">
                                Verify
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
                                <img src={FacebookLogo} alt="Facebook logo" className="logo" /> Sign in with Facebook
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

export default Verify;
