import React, { useState, useEffect } from 'react';
import Nav from '../Utilities/Nav';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getAllBlogs } from '../../services/blog-service'; // Import getAllBlogs from your service

const Blogs = () => {
    const [blogs, setBlogs] = useState([]); // State to store blogs
    const [loading, setLoading] = useState(true); // State for loading
    const [error, setError] = useState(null); // State for error

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const blogs = await getAllBlogs(); // Use the helper method
                setBlogs(blogs); // Update state with blogs data
                toast.success('Blogs loaded successfully!');
            } catch (err) {
                setError(err.message || 'Failed to fetch blogs.');
                toast.error(`Error: ${err.message || 'Failed to fetch blogs.'}`);
            } finally {
                setLoading(false); // Set loading to false regardless of success or failure
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
