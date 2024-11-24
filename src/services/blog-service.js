// blog-service.js
import { myAxios } from "./helper";

// Method to fetch all blogs
export const getAllBlogs = async () => {
    try {
        // Retrieve the access token (assuming it's stored in localStorage)
        const token = localStorage.getItem('accessToken'); // Adjust this based on where you store your token
        
        // If the token exists, include it in the headers
        const headers = token ? { Authorization: `Bearer ${token}` } : {};
        console.log(headers)
        // Make a GET request to fetch all blogs with the Authorization header
        const response = await myAxios.get('/api/blog/all', { headers });
        console.log(response.data)
        return response.data; // Return the blog data
    } catch (error) {
        // Handle errors and provide custom error messages
        throw new Error(error.response?.data?.message || "Failed to fetch blogs");
    }
};
