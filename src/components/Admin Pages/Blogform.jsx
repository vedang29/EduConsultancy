import { useState } from 'react';
import { toast } from 'react-toastify';
import { publishBlog } from '../../services/blog-service';  // Import the service for publishing the blog
import { getUserId } from '../../services/blog-service';  // A new function to get userId

const Blogform = ({ onClose, onBlogPublished }) => {
    const [image, setImage] = useState(null);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [category, setCategory] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);  // Update image state with the file
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title || !content || !category || !image) {
            toast.error("Please fill in all fields and upload an image.");
            return;
        }

        setLoading(true);
        try {
            // Fetch the userId using the access token
            const userId = await getUserId();

            // Create FormData to append the image file first
            const formData = new FormData();
            formData.append("file", image);  // Append the image file first

            // Now append the blogDto (other fields)
            const blogDto = {
                userId,
                title,
                content,
                category
            };

            // Append the blogDto fields to FormData
            formData.append("blogDto", JSON.stringify(blogDto));  // Append the blogDto as JSON

            // Publish the blog
            await publishBlog(formData);
            setSuccess("Blog published successfully!");
            toast.success("Blog published successfully!");
            setTitle('');
            setContent('');
            setCategory('');
            setImage(null);
            onClose(); // Close the form after success

            // Call the function passed from parent to refresh the blog list
            onBlogPublished(); // This will trigger the refresh of the blog list in the parent
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-10 rounded-xl shadow-md w-1/2 relative">
            {/* Close Button */}
            <div className="flex justify-between items-center">
                <div className="font-bold text-3xl">
                    Publish New Blog
                </div>
                <button
                    type="button"
                    className="text-5xl text-gray-600"
                    onClick={onClose}
                >
                    ×
                </button>
            </div>

            <div className="flex flex-col gap-1">
                {/* Image Upload */}
                <label className="text-lg">Upload Image:
                    <input
                        accept="image/*"
                        type="file"
                        className="block mt-2"
                        onChange={handleImageChange}
                    />
                    <div className="w-48 h-36 mt-3 rounded-xl overflow-hidden">
                        {image ? (
                            <img src={URL.createObjectURL(image)} alt="Blog" className="w-full h-full object-cover" />
                        ) : (
                            <div className="w-full h-full flex justify-center items-center bg-gray-100">
                                <span className="text-gray-500">No Image</span>
                            </div>
                        )}
                    </div>
                </label>

                {/* Title */}
                <label className="text-lg mt-4">Title:
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="mt-2 p-2 w-full border border-gray-300 rounded"
                        placeholder="Blog title"
                    />
                </label>

                {/* Content */}
                <label className="text-lg mt-4">Content:
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className="mt-2 p-2 w-full border border-gray-300 rounded"
                        placeholder="Blog content"
                    />
                </label>

                {/* Category */}
                <label className="text-lg mt-4">Category:
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="mt-2 p-2 w-full border border-gray-300 rounded"
                    >
                        <option value="" disabled>Select Category</option>
                        <option value="Tech">Tech</option>
                        <option value="Lifestyle">Lifestyle</option>
                        <option value="Travel">Travel</option>
                        <option value="Food">Food</option>
                    </select>
                </label>
            </div>

            {/* Display Success Message */}
            {success && <div className="text-green-600 mt-4">{success}</div>}

            {/* Publish Blog Button */}
            <div className="flex justify-center items-center">
                <button
                    type="submit"
                    className="mt-6 py-3 btnhover px-6 bg-dark text-lg text-white rounded-lg w-[75%]"
                    disabled={loading}
                >
                    {loading ? 'Publishing...' : 'Publish Blog'}
                </button>
            </div>
        </form>
    );
};

export default Blogform;
