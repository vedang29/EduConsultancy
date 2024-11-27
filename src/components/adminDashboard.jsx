import React, { useState, useEffect } from 'react';
import { getUserDetails } from '../services/user-service';  // Import the function to fetch user details
import { useNavigate } from 'react-router-dom';  // Import useNavigate hook for redirection
import Nav from './Utilities/Nav';
import Purple from './Adminlabels/Purple';
import Orange from './Adminlabels/Orange';
import Green from './Adminlabels/Green';
import Red from './Adminlabels/Red';

const AdminDashboard = () => {
    const navigate = useNavigate();  // Initialize navigate hook

    // Define state to hold the user data
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch user details when component mounts
    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                const userDetails = await getUserDetails();
                setUser(userDetails);
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch user details');
                setLoading(false);
            }
        };

        fetchUserDetails();
    }, []);  // Empty array means this effect runs once when the component mounts

    // Handle navigation to the Blogs page
    const goToBlogs = () => {
        navigate('/admin/blogs');  // Redirect to /blogs page
    };

    const goToContacts = () => {
        navigate('/admin/contacts');  // Redirect to /blogs page
    };

    const goToFeedbacks = () =>{
        navigate('/admin/feedbacks')
    }

    if (loading) {
        return <div>Loading...</div>;  // Display loading message while fetching data
    }

    if (error) {
        return <div>{error}</div>;  // Display error message if any
    }

    return (
        <div className="max-w-7xl h-screen mx-auto flex flex-col gap-5">
            <Nav />
            <div className="flex justify-between items-center border-b-2 pb-5">
                <div>
                    <div className="font-bold text-3xl">Admin Dashboard</div>
                    <div><span className="font-semibold">Welcome Back : </span><span>{user.name}</span></div>
                    <div><span className="font-semibold">Logged in as : </span><span>{user.email}</span></div>
                    <div><span className="font-semibold">Account Level : </span><span>{user.role}</span></div>
                </div>
                <div className="sidenav w-[50%] p-10">
                    <div className="font-bold text-3xl">Quick Global Search</div>
                    <div>
                        <div className="mt-2 mb-4 "><input type="text" id="search" name="search" placeholder="Search anything here..." className="p-2 rounded-md text-sm bg-lightblue w-full inputborder" required /></div>
                    </div>
                </div>
            </div>

            <div className="flex gap-5">
                <Purple />
                <Orange />
                <Green />
                <Red />
            </div>

            <div className="line"></div>

            <div className="font-bold text-3xl">
                Quick Links
            </div>

            <div className="grid grid-cols-4 gap-10 mt-5">
                <div className="flex justify-center items-center gap-10 p-4 qbtn">
                    <div className="font-semibold text-lg">Users Management</div>
                </div>
                <div className="flex justify-center items-center gap-10 p-4 qbtn">
                    <div className="font-semibold text-lg">Products</div>
                </div>
                <div className="flex justify-center items-center gap-10 p-4 qbtn">
                    <div className="font-semibold text-lg">Subscriptions</div>
                </div>
                <div className="flex justify-center items-center gap-10 p-4 qbtn" onClick={goToBlogs}>  {/* Add onClick handler */}
                    <div className="font-semibold text-lg">Blogs</div>
                </div>
                <div className="flex justify-center items-center gap-10 p-4 qbtn"  onClick={goToContacts}>
                    <div className="font-semibold text-lg">Contacts</div>
                </div>
                <div className="flex justify-center items-center gap-10 p-4 qbtn"  onClick={goToFeedbacks}>
                    <div className="font-semibold text-lg">Feedback</div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
