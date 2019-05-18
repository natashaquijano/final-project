import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: process.env.NODE_ENV === 'production' ? 'https://rouse-backend-website.herokuapp.com/api' : "http://localhost:4000/api"
})
export default axiosInstance;
