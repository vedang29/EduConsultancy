import axios from "axios";

export const BASE_URL = 'http://localhost:8080';

export const myAxios = axios.create({
    baseURL: BASE_URL
});

// SignUp Method
export const signUp = (user) => {
    console.log(user);
    return myAxios.post('api/auth/register', user).then((response) => response.data);
};

// SignIn Method
export const signin = async (data) => {
    try {
        // Make the login request
        const response = await myAxios.post('api/auth/login', data);
        
        // Save tokens to localStorage
        localStorage.setItem('accessToken', response.data.accessToken);
        localStorage.setItem('refreshToken', response.data.refreshToken);

        // Get user details after login
        const userResponse = await myAxios.get('/api/auth/me', {
            headers: {
                Authorization: `Bearer ${response.data.accessToken}`
            }
        });

        // Return both token and user details
        return { ...response.data, user: userResponse.data };
    } catch (error) {
        // Handle errors from the API
        throw error.response ? error.response.data : { message: "Server error" };
    }
};

// Method to request OTP (send to email)
export const sendOtp = async (email) => {
    try {
        // Make a request to send OTP to the given email
        const response = await myAxios.post(`${BASE_URL}/forgotPassword/verifyMail/${email}`);
        return response.data; // Return response data (success message, etc.)
    } catch (error) {
        // Handle errors and provide custom error messages
        throw new Error(error.response?.data?.message || "Failed to request OTP");
    }
};

// Method to verify OTP
export const verifyOtp = async (otp, email) => {
    try {
        // Verify OTP by making a request
        const response = await myAxios.post(`${BASE_URL}/forgotPassword/verifyOtp/${otp}/${email}`);
        return response.data; // Return success or failure data
    } catch (error) {
        // Handle errors and provide custom error messages
        throw new Error(error.response?.data?.message || "OTP verification failed");
    }
};

// Method to change the password
export const changePassword = async (email, password, repeatPassword) => {
    try {
        // Prepare the payload with the password details
        const payload = { password, repeatPassword };

        // Make the request to change the password
        const response = await myAxios.post(`${BASE_URL}/forgotPassword/changePassword/${email}`, payload);
        return response.data; // Return success response
    } catch (error) {
        // Handle errors and provide custom error messages
        throw new Error(error.response?.data?.message || "Password change failed");
    }
};
