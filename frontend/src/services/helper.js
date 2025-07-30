import axios from "axios";

// export const BASE_URL='http://localhost:8080';
// export const BASE_URL='http://localhost:5171';
export const BASE_URL = process.env.REACT_APP_BACKEND_URL;

export const myAxios=axios.create({
    baseURL:BASE_URL
});