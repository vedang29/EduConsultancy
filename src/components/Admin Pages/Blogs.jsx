import React, { useState, useEffect } from 'react';
import Nav from '../Utilities/Nav';
import { getAllBlogs, deleteBlog } from '../../services/blog-service'; // Import deleteBlog service
import plus from "../../assets/plus.png";
import Blogform from './Blogform';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showForm, setShowForm] = useState(false);

    // Fetch all blogs from the backend
    const fetchBlogs = async () => {
        try {
            const blogs = await getAllBlogs();
            setBlogs(blogs);
        } catch (err) {
            setError(err.message || 'Failed to fetch blogs.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchBlogs();
    }, []);

    const handleBlogPublished = () => {
        fetchBlogs();
        setShowForm(false);
    };

    const toggleForm = () => {
        setShowForm(!showForm);
    };

    // Function to handle blog deletion
    const handleDeleteBlog = async (blogId) => {
        // First, remove the blog from the UI immediately
        setBlogs(blogs.filter(blog => blog.blogId !== blogId));
        
        try {
            // Call the backend to delete the blog
            await deleteBlog(blogId);
            alert("Blog deleted successfully.");
        } catch (err) {
            alert("Error deleting the blog: " + err.message);
            // If there's an error, we need to add the blog back to the list
            fetchBlogs(); // Optionally, re-fetch the list if there's an error
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
                        required
                    />
                </div>

                {/* Plus Button to Toggle Form */}
                <div className="bg-dark flex justify-center items-center p-3 rounded-full plushover" onClick={toggleForm}>
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
                    <Blogform onClose={toggleForm} onBlogPublished={handleBlogPublished} />
                </div>
            )}

            {/* Blog Table */}
            <div className="overflow-x-auto">
                <table className="min-w-full table-auto">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="py-2 px-4 border-b text-left">Blog ID</th>
                            {/* Removed Blog Image column */}
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
                        {blogs.map((blog) => (
                            <tr key={blog.blogId}>
                                <td className="py-2 px-4 border-b">{blog.blogId}</td>
                                {/* Removed Blog Image column */}
                                <td className="py-2 px-4 border-b">{blog.category}</td>
                                <td className="py-2 px-4 border-b truncate-content">{blog.content}</td>
                                <td className="py-2 px-4 border-b">{new Date(blog.createdAt).toLocaleString()}</td>
                                <td className="py-2 px-4 border-b">{blog.title}</td>
                                <td className="py-2 px-4 border-b">{new Date(blog.updatedAt).toLocaleString()}</td>
                                <td className="py-2 px-4 border-b">{blog.userId}</td>
                                <td className="py-2 px-4 border-b flex flex-col gap-2">
                                    <button className="bg-blue-500 text-white py-1 px-3 w-full rounded-md mr-2">Edit</button>
                                    <button className="bg-[red] text-white py-1 px-3 rounded-md" onClick={() => handleDeleteBlog(blog.blogId)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Blogs;

// import React, { useState, useEffect } from 'react';
// import Nav from '../Utilities/Nav';
// import { getAllBlogs, deleteBlog } from '../../services/blog-service'; // Import deleteBlog service
// import plus from "../../assets/plus.png";
// import Blogform from './Blogform';

// const Blogs = () => {
//     const [blogs, setBlogs] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [showForm, setShowForm] = useState(false);

//     // Fetch all blogs from the backend
//     const fetchBlogs = async () => {
//         try {
//             const blogs = await getAllBlogs();
//             setBlogs(blogs);
//         } catch (err) {
//             setError(err.message || 'Failed to fetch blogs.');
//         } finally {
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         fetchBlogs();
//     }, []);

//     const handleBlogPublished = () => {
//         fetchBlogs();
//         setShowForm(false);
//     };

//     const toggleForm = () => {
//         setShowForm(!showForm);
//     };

//     // Function to handle blog deletion
//     const handleDeleteBlog = async (blogId) => {
//         // First, remove the blog from the UI immediately
//         setBlogs(blogs.filter(blog => blog.blogId !== blogId));
        
//         try {
//             // Call the backend to delete the blog
//             await deleteBlog(blogId);
//             alert("Blog deleted successfully.");
//         } catch (err) {
//             alert("Error deleting the blog: " + err.message);
//             // If there's an error, we need to add the blog back to the list
//             fetchBlogs(); // Optionally, re-fetch the list if there's an error
//         }
//     };

//     if (loading) {
//         return <div>Loading blogs...</div>;
//     }

//     if (error) {
//         return <div>Error: {error}</div>;
//     }

//     return (
//         <div className="max-w-7xl h-screen mx-auto flex flex-col gap-5 relative">
//             <Nav />
//             <div className="font-bold text-3xl">Blogs Management</div>

//             {/* Search Bar */}
//             <div className="flex justify-between items-center">
//                 <div className="mt-2 mb-4 flex justify-center items-center w-1/2">
//                     <input
//                         type="text"
//                         id="search"
//                         name="search"
//                         placeholder="Search anything here..."
//                         className="p-2 rounded-md text-sm bg-lightblue w-full inputborder"
//                         required
//                     />
//                 </div>

//                 {/* Plus Button to Toggle Form */}
//                 <div className="bg-dark flex justify-center items-center p-3 rounded-full plushover" onClick={toggleForm}>
//                     <img
//                         src={plus}
//                         alt="Plus Icon"
//                         style={{ width: '20px', height: '20px' }}
//                     />
//                 </div>
//             </div>

//             {/* Render Blogform based on showForm state */}
//             {showForm && (
//                 <div className="fixed inset-0 bg-[black] bg-opacity-70 z-50 flex justify-center items-center">
//                     <Blogform onClose={toggleForm} onBlogPublished={handleBlogPublished} />
//                 </div>
//             )}

//             {/* Blog Table */}
//             <div className="overflow-x-auto">
//                 <table className="min-w-full table-auto">
//                     <thead>
//                         <tr className="bg-gray-100">
//                             <th className="py-2 px-4 border-b text-left">Blog ID</th>
//                             <th className="py-2 px-4 border-b text-left">Blog Image</th>
//                             <th className="py-2 px-4 border-b text-left">Category</th>
//                             <th className="py-2 px-4 border-b text-left">Content</th>
//                             <th className="py-2 px-4 border-b text-left">Created At</th>
//                             <th className="py-2 px-4 border-b text-left">Title</th>
//                             <th className="py-2 px-4 border-b text-left">Updated At</th>
//                             <th className="py-2 px-4 border-b text-left">User ID</th>
//                             <th className="py-2 px-4 border-b text-left">Actions</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {blogs.map((blog) => (
//                             <tr key={blog.blogId}>
//                                 <td className="py-2 px-4 border-b">{blog.blogId}</td>
//                                 <td className="py-2 px-4 border-b">
//                                     <img
//                                         src={blog.blogUrl || 'https://via.placeholder.com/50'}
//                                         alt={blog.title}
//                                         className="w-12 h-12 object-cover"
//                                     />
//                                 </td>
//                                 <td className="py-2 px-4 border-b">{blog.category}</td>
//                                 <td className="py-2 px-4 border-b truncate-content">{blog.content}</td>
//                                 <td className="py-2 px-4 border-b">{new Date(blog.createdAt).toLocaleString()}</td>
//                                 <td className="py-2 px-4 border-b">{blog.title}</td>
//                                 <td className="py-2 px-4 border-b">{new Date(blog.updatedAt).toLocaleString()}</td>
//                                 <td className="py-2 px-4 border-b">{blog.userId}</td>
//                                 <td className="py-2 px-4 border-b flex flex-col gap-2">
//                                     <button className="bg-blue-500 text-white py-1 px-3 w-full rounded-md mr-2">Edit</button>
//                                     <button className="bg-[red] text-white py-1 px-3 rounded-md" onClick={() => handleDeleteBlog(blog.blogId)}>Delete</button>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// };

// export default Blogs;