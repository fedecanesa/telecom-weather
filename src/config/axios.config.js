import axios from 'axios';
import config from './config';

export default axios.create({
    baseURL: config.VITE_API_URL_BASE,
});
