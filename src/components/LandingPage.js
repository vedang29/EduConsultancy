import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from './Navbar'

const LandingPage = () => {
    return (
        <div className="max-w-7xl h-screen mx-auto">
            <Navbar />

            <div className="hero flex h-1/2 mt-4 justify-center"> {/* Reduced gap by adding mt-4 */}

                <div className="w-1/2 flex flex-col p-16 justify-center">
                    <h1 className="text-5xl font-bold text-gray-800 mb-4">
                        Learn with expert anytime anywhere
                    </h1>
                    <p className="text-lg text-gray-600 mb-8">
                        Our mission is to help people to find the best course online and
                        learn with expert anytime, anywhere.
                    </p>
                    <Link to="/signup">
                        <button className="bg-orange btnhover text-white  w-40 font-bold py-2 px-4 rounded-lg">
                            Create Account
                        </button>
                    </Link>

                </div>

                <div className="parallelogram w-1/2">

                </div>
            </div>
        </div>

    )
}

export default LandingPage