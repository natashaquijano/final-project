import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: process.env.api || "http://localhost:4000/api"
})
export default axiosInstance;
