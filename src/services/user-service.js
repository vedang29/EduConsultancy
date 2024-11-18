import { myAxios } from "./helper";

export const signUp = (user) => {
    return myAxios.post('/auth/signup', user).then((response) => response.data);
};

export const verifyOtp = async (otpData) => {
    try {

        console.log("Data being sent to backend:", otpData);

        const response = await myAxios.post('/auth/verify', otpData, {
            headers: {
                'Content-Type': 'application/json', 
            },
        });


        console.log("Response from backend:", response.data);

        return response.data;
    } catch (error) {
     
        console.error("OTP Verification Error:", error.response?.data || error.message);
        throw error;
    }
};

export const signin = async (data) => {
    try {
      const response = await myAxios.post('/auth/login', data);
      return response.data; // Token
    } catch (error) {
      throw error.response ? error.response.data : { message: "Server error" };
    }
  };