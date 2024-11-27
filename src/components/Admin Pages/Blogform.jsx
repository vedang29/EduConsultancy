import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { publishBlog, updateBlog, getUserId } from '../../services/blog-service';

const Blogform = ({ mode = 'create', blogData = null, onClose, onBlogUpdated }) => {
    const [image, setImage] = useState(null);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [category, setCategory] = useState('');
    const [loading, setLoading] = useState(false);

    // Populate form data when in edit mode
    useEffect(() => {
        if (mode === 'edit' && blogData) {
            setTitle(blogData.title || '');
            setContent(blogData.content || '');
            setCategory(blogData.category || '');
        }
    }, [mode, blogData]);

    // Handle image change
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            if (file.size > 5 * 1024 * 1024) {  // 5MB limit
                toast.error("File size is too large. Please upload a smaller image.");
                return;
            }
            setImage(file);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!title || !content || !category || (mode === 'create' && !image)) {
            toast.error("Please fill in all fields and upload an image.");
            return;
        }
        
        if (content.length < 5) {
            toast.error("Content must be at least 5 characters long.");
            return;
        }
        
        setLoading(true);
        
        try {
            let userId = null;
            if (mode === 'create') {
                userId = await getUserId();
            }
        
            const blogDto = {
                userId: userId || blogData?.userId,
                title,
                content,
                category,
            };
        
            const formData = new FormData();
            
            // Append the image if available
            if (image) {
                formData.append('file', image);
            }
            
            // Always append the blogDto object (whether the image is present or not)
            formData.append('blogDto', JSON.stringify(blogDto));
        
            if (mode === 'create') {
                await publishBlog(formData); // Publish a new blog
                toast.success("Blog published successfully!");
            } else if (mode === 'edit') {
                await updateBlog(blogData.id, formData); // Update an existing blog
                toast.success("Blog updated successfully!");
            }
        
            // Reset fields after successful submit
            setTitle('');
            setContent('');
            setCategory('');
            setImage(null);
        
            // Close the form
            onClose();
        
            // Notify parent to refresh blog list
            if (onBlogUpdated) {
                onBlogUpdated(); // This will trigger the re-fetch of blogs
            }
        } catch (error) {
            console.error(error);
            toast.error(error.message || "An error occurred");
        } finally {
            setLoading(false);
        }
    };
    

    return (
        <div className="bg-white p-6 rounded-md shadow-md w-full max-w-xl">
            <h2 className="text-2xl font-bold mb-4">{mode === 'edit' ? 'Edit Blog' : 'Create Blog'}</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-sm font-semibold mb-2">Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full p-2 border rounded-md"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-semibold mb-2">Content</label>
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className="w-full p-2 border rounded-md"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-semibold mb-2">Category</label>
                    <input
                        type="text"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full p-2 border rounded-md"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-semibold mb-2">Upload Image</label>
                    <input
                        type="file"
                        onChange={handleImageChange}
                        className="w-full p-2 border rounded-md"
                    />
                </div>

                <div className="mb-4 flex justify-between">
                    <button
                        type="button"
                        onClick={onClose}
                        className="bg-gray-500 text-white py-2 px-4 rounded-md"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white py-2 px-4 rounded-md"
                        disabled={loading}
                    >
                        {loading ? "Submitting..." : "Submit"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Blogform;
