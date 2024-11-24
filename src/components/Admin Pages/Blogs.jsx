import React, { useState, useEffect } from 'react';
import Nav from '../Utilities/Nav';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]); // State to store blogs
    const [loading, setLoading] = useState(true); // State for loading
    const [error, setError] = useState(null); // State for error

    useEffect(() => {
        const fetchBlogs = async () => {
            const accessToken = localStorage.getItem('accessToken'); // Fetch accessToken from localStorage

            if (!accessToken) {
                setError('No access token found.');
                toast.error('No access token found. Please log in again.');
                setLoading(false);
                return;
            }

            try {
                const response = await fetch('http://localhost:8080/api/blog/all', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${accessToken}`,
                        'Content-Type': 'application/json',
                    },
                    credentials: 'include' // Make sure to include credentials
                });
                

                if (!response.ok) {
                    throw new Error('Failed to fetch blogs');
                }

                const data = await response.json();
                setBlogs(data); // Update state with blogs data
                toast.success('Blogs loaded successfully!');
                setLoading(false);
            } catch (err) {
                setError(err.message);
                toast.error(`Error: ${err.message}`);
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    if (loading) {
        return <div>Loading blogs...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="max-w-7xl h-screen mx-auto flex flex-col gap-5">
            <Nav />
            <ToastContainer /> {/* ToastContainer to render toast messages */}
            <div className="font-bold text-3xl">Blogs Management</div>
            <div>
                <div className="mt-2 mb-4">
                    <input
                        type="text"
                        id="search"
                        name="search"
                        placeholder="Search anything here..."
                        className="p-2 rounded-md text-sm bg-lightblue w-full inputborder"
                        required
                    />
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full table-auto">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="py-2 px-4 border-b text-left">Blog ID</th>
                            <th className="py-2 px-4 border-b text-left">Blog Image</th>
                            <th className="py-2 px-4 border-b text-left">Category</th>
                            <th className="py-2 px-4 border-b text-left">Content</th>
                            <th className="py-2 px-4 border-b text-left">Created At</th>
                            <th className="py-2 px-4 border-b text-left">Title</th>
                            <th className="py-2 px-4 border-b text-left">Updated At</th>
                            <th className="py-2 px-4 border-b text-left">User ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {blogs.map((blog) => (
                            <tr key={blog.blogId}>
                                <td className="py-2 px-4 border-b">{blog.blogId}</td>
                                <td className="py-2 px-4 border-b">
                                    <img
                                        src={blog.blogUrl || 'https://via.placeholder.com/50'} // Use blogUrl for images
                                        alt={blog.title}
                                        className="w-12 h-12 object-cover"
                                    />
                                </td>
                                <td className="py-2 px-4 border-b">{blog.category}</td>
                                <td className="py-2 px-4 border-b">{blog.content}</td>
                                <td className="py-2 px-4 border-b">{new Date(blog.createdAt).toLocaleString()}</td>
                                <td className="py-2 px-4 border-b">{blog.title}</td>
                                <td className="py-2 px-4 border-b">{new Date(blog.updatedAt).toLocaleString()}</td>
                                <td className="py-2 px-4 border-b">{blog.userId}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Blogs;
