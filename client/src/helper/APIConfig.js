import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: process.env.api || "https://rouse-backend-website.herokuapp.com/api"
})
export default axiosInstance;
