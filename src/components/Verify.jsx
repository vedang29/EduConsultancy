import React, { useRef, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; 
import ArtImage from "../assets/Art.jpg";
import { verifyOtp } from '../services/user-service'; 
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom';

const Verify = () => {
    const location = useLocation(); 
    const email = location.state?.email; 

    const inputRefs = useRef([]); 
    const [otp, setOtp] = useState(['', '', '', '', '', '']); 
    const [error, setError] = useState(''); 
    const [isLoading, setIsLoading] = useState(false); 

    useEffect(() => {
        if (!email) {
            toast.error("No email found. Redirecting to Signup...");
            window.location.href = '/signup'; 
        }
    }, [email]);

    const handleInputChange = (e, index) => {
        const value = e.target.value;
        const newOtp = [...otp];

        if (/^\d$/.test(value)) {
            newOtp[index] = value;
            setOtp(newOtp);

            if (index < inputRefs.current.length - 1) {
                inputRefs.current[index + 1].focus();
            }
        } else {
            e.target.value = ''; 
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === 'Backspace') {
            if (index > 0 && !e.target.value) {
                const newOtp = [...otp];
                newOtp[index] = ''; 
                setOtp(newOtp);
                inputRefs.current[index - 1].focus(); 
            } else if (e.target.value) {
                const newOtp = [...otp];
                newOtp[index] = ''; 
                setOtp(newOtp);
            }
        }
    };

    // Inside the Verify component
const navigate = useNavigate();

const handleVerifyClick = async () => {
    setIsLoading(true);
    setError('');

    const otpData = otp.join('');

    if (otpData.length !== 6) {
        setError('OTP must be a 6-digit code.');
        toast.warn("OTP must be a 6-digit code.", { position: "top-right", autoClose: 3000 });
        setIsLoading(false);
        return;
    }

    if (!email) {
        setError('Email is missing. Please try again.');
        toast.error("Email is missing. Please try again.", { position: "top-right", autoClose: 3000 });
        setIsLoading(false);
        return;
    }

    const data = {
        email: email,
        verificationCode: otpData,
    };

    // Show loader toast
    const toastId = toast.loading("Verifying OTP...");

    try {
        console.log('Sending data:', data);
        await verifyOtp(data);

        // Update the toast to success
        toast.update(toastId, {
            render: "OTP verified successfully! Redirecting to Sign In...",
            type: "success",
            isLoading: false,
            autoClose: 5000,
        });

        navigate('/signin'); // Redirects to the Sign In page
    } catch (error) {
        console.error('Verification failed:', error.response?.data || error.message);
        setError('OTP verification failed. Please try again.');

        // Update the toast to error
        toast.update(toastId, {
            render: "OTP verification failed. Please try again.",
            type: "error",
            isLoading: false,
            autoClose: 5000,
        });
    } finally {
        setIsLoading(false);
    }
};

    return (
        <div className="max-w-7xl h-screen mx-auto flex justify-around">
            <div className="w-1/2 flex flex-col justify-center items-center">
                <div className="flex flex-col w-[324px] justify-center">
                    <div className="text-3xl font-semibold mb-4">
                        Enter Verification Code
                    </div>
                    <div className="text-md mb-2">
                        Enter the 6-digit code sent to your email
                    </div>

                    <div className="mt-10">
                        <form className="flex flex-col">
                            <div>
                                <label htmlFor="otp" className="font-semibold text-sm">
                                    6-digit code
                                </label>
                            </div>
                            <div className="flex gap-2 mt-3">
                                {[...Array(6)].map((_, index) => (
                                    <div key={index} className="mb-4">
                                        <input
                                            type="text"
                                            maxLength="1"
                                            className="p-2 rounded-lg text-sm bg-lightblue w-10 h-10 text-center inputborder"
                                            ref={(el) => (inputRefs.current[index] = el)}
                                            onChange={(e) => handleInputChange(e, index)}
                                            onKeyDown={(e) => handleKeyDown(e, index)}
                                            value={otp[index]} 
                                            required
                                        />
                                    </div>
                                ))}
                            </div>
                        </form>
                    </div>

                    {error && <div className="text-red-600 text-sm mb-4">{error}</div>}

                    <div>
                        <div className="flex justify-center items-center">
                            <div>Didn’t receive the code?</div>
                            <button className="text-blue-800 font-semibold text-right mt-4 mb-4 ml-2">
                                Resend
                            </button>
                        </div>

                        <button
                            className={`bg-dark text-white flex justify-center items-center p-3 rounded-xl w-full btnhover ${
                                isLoading ? 'opacity-50' : ''
                            }`}
                            onClick={handleVerifyClick}
                            disabled={isLoading}
                        >
                            {isLoading ? 'Verifying...' : 'Verify'}
                        </button>
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