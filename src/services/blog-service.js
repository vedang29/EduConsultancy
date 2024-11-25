// blog-service.js
import { myAxios } from "./helper";

// Method to fetch all blogs
export const getAllBlogs = async () => {
    try {
        const token = localStorage.getItem('accessToken');  // Get token from localStorage
        const headers = token ? { Authorization: `Bearer ${token}` } : {};
        
        const response = await myAxios.get('/api/blog/all', { headers });
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || "Failed to fetch blogs");
    }
};

// Fetch the user data using the access token
export const getUserId = async () => {
    try {
        const token = localStorage.getItem('accessToken');  // Get token from localStorage
        const headers = token ? { Authorization: `Bearer ${token}` } : {};

        // Fetch user data from the '/api/auth/me' endpoint
        const response = await myAxios.get('/api/auth/me', { headers });
        return response.data.userId;  // Assuming the response contains userId
    } catch (error) {
        throw new Error(error.response?.data?.message || "Failed to fetch user info");
    }
};

// Method to publish a new blog using FormData
export const publishBlog = async (formData) => {
    try {
        const token = localStorage.getItem('accessToken');  // Get token from localStorage
        const headers = token ? { Authorization: `Bearer ${token}` } : {};

        // Send FormData in the POST request with the correct headers
        const response = await myAxios.post('/api/blog/add-blog', formData, {
            headers: {
                ...headers,
                'Content-Type': 'multipart/form-data', // Important for file uploads
            }
        });
        return response.data;  // Returns the response data (usually the published blog)
    } catch (error) {
        throw new Error(error.response?.data?.message || "Failed to publish the blog");
    }
};

// Method to delete a blog by its ID
export const deleteBlog = async (blogId) => {
    try {
        // Get the token from localStorage (or sessionStorage depending on your app's setup)
        const token = localStorage.getItem('accessToken'); // or sessionStorage if that's how you're storing the token

        // Check if the token exists
        if (!token) {
            throw new Error('No access token found');
        }

        // Make the DELETE request with the Authorization header
        const response = await myAxios.delete(`/api/blog/delete/${blogId}`, {
            headers: {
                Authorization: `Bearer ${token}`, // Add the token in the Authorization header
            },
        });

        // Return the response from the API (if needed)
        return response.data;
    } catch (error) {
        // Improved error handling
        const errorMessage = error.response?.data?.message || error.message || 'Failed to delete the blog';
        throw new Error(errorMessage);  // Propagate the error with a more useful message
    }
};

