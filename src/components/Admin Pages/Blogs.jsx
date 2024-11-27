import React, { useState, useEffect } from 'react';
import Nav from '../Utilities/Nav';
import { getAllBlogs, deleteBlog } from '../../services/blog-service';
import plus from "../../assets/plus.png";
import Blogform from './Blogform';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const [formMode, setFormMode] = useState('create'); // Track form mode
    const [currentBlog, setCurrentBlog] = useState(null); // Track blog being edited

    // Fetch all blogs from the backend
    const fetchBlogs = async () => {
        setLoading(true);
        setError(null);
        try {
            const blogs = await getAllBlogs();
            setBlogs(blogs);
        } catch (err) {
            setError(err.message || 'Failed to fetch blogs.');
        } finally {
            setLoading(false);
        }
    };

    // Fetch blogs on component mount
    useEffect(() => {
        fetchBlogs();
    }, []);

    // Handle blog publishing or editing
    const handleBlogUpdate = () => {
        fetchBlogs(); // Ensure this refetches all blogs after a successful update or publish
        setShowForm(false); // Close the form
    };

    // Toggle blog form visibility
    const toggleForm = (mode = 'create', blog = null) => {
        setFormMode(mode);
        setCurrentBlog(blog);
        setShowForm(!showForm);
    };

    const handleDeleteBlog = async (blogId) => {
        // Optimistically remove the blog from the list
        const updatedBlogs = blogs.filter(blog => blog.blogId !== blogId);
        setBlogs(updatedBlogs); 
    
        try {
            // Attempt to delete the blog via API
            await deleteBlog(blogId);
            alert('Blog deleted successfully.');
        } catch (err) {
            // If deletion fails, restore the blog in the list
            setBlogs(blogs);  // Revert to the previous state
            alert(`Error deleting the blog: ${err.message}`);
        }
    };
    

    if (loading) {
        return <div>Loading blogs...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="max-w-7xl h-screen mx-auto flex flex-col gap-5 relative">
            <Nav />
            <div className="font-bold text-3xl">Blogs Management</div>

            {/* Search Bar */}
            <div className="flex justify-between items-center">
                <div className="mt-2 mb-4 flex justify-center items-center w-1/2">
                    <input
                        type="text"
                        id="search"
                        name="search"
                        placeholder="Search anything here..."
                        className="p-2 rounded-md text-sm bg-lightblue w-full inputborder"
                    />
                </div>

                {/* Plus Button to Toggle Form */}
                <div
                    className="bg-dark flex justify-center items-center p-3 rounded-full plushover cursor-pointer"
                    onClick={() => toggleForm('create')}
                >
                    <img
                        src={plus}
                        alt="Plus Icon"
                        style={{ width: '20px', height: '20px' }}
                    />
                </div>
            </div>

            {/* Render Blogform based on showForm state */}
            {showForm && (
                <div className="fixed inset-0 bg-[black] bg-opacity-70 z-50 flex justify-center items-center">
                    <Blogform
                        mode={formMode}
                        blogData={currentBlog}
                        onClose={() => setShowForm(false)}
                        onBlogUpdated={handleBlogUpdate} // Pass the handler to trigger blog fetch
                    />
                </div>
            )}

            {/* Blog Table */}
            <div className="overflow-x-auto">
                <table className="min-w-full table-auto">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="py-2 px-4 border-b text-left">Blog ID</th>
                            <th className="py-2 px-4 border-b text-left">Category</th>
                            <th className="py-2 px-4 border-b text-left">Content</th>
                            <th className="py-2 px-4 border-b text-left">Created At</th>
                            <th className="py-2 px-4 border-b text-left">Title</th>
                            <th className="py-2 px-4 border-b text-left">Updated At</th>
                            <th className="py-2 px-4 border-b text-left">User ID</th>
                            <th className="py-2 px-4 border-b text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {blogs.length > 0 ? (
                            blogs.map((blog) => (
                                <tr key={blog.blogId}>
                                    <td className="py-2 px-4 border-b">{blog.blogId}</td>
                                    <td className="py-2 px-4 border-b">{blog.category}</td>
                                    <td className="py-2 px-4 border-b truncate-content">
                                        {blog.content.length > 50
                                            ? `${blog.content.slice(0, 50)}...`
                                            : blog.content}
                                    </td>
                                    <td className="py-2 px-4 border-b">{new Date(blog.createdAt).toLocaleString()}</td>
                                    <td className="py-2 px-4 border-b">{blog.title}</td>
                                    <td className="py-2 px-4 border-b">{new Date(blog.updatedAt).toLocaleString()}</td>
                                    <td className="py-2 px-4 border-b">{blog.userId}</td>
                                    <td className="py-2 px-4 border-b flex flex-col gap-2">
                                        <button
                                            className="bg-blue-500 text-white py-1 px-3 w-full rounded-md mr-2"
                                            onClick={() => toggleForm('edit', blog)}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            className="bg-[red] text-white py-1 px-3 rounded-md"
                                            onClick={() => handleDeleteBlog(blog.blogId)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="8" className="text-center py-4">
                                    No blogs available.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Blogs;
