import axios from 'axios';

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_READ_ACCESS_TOKEN;
const BASE_URL = "https://api.themoviedb.org/3";
const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Authorization': `Bearer ${API_KEY}`, // Authorization header
    },
});

export default api;