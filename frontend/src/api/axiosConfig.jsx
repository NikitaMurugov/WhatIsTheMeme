import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.REACT_APP_API
});

instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';
instance.interceptors.request;
export default instance;
