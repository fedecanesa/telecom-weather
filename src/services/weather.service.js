import api from '../config/axios.config';
import config from '../config/config';
import axios from 'axios';

export const getLocalWeather = location => {
    return api.get(
        `/weather?q=${location}&units=metric&appid=${config.VITE_API_KEY}`,
    );
};

export const getWeather = (lat, long) => {
    return api.get(
        `/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${config.VITE_API_KEY}`,
    );
};

export const getForecast = (lat, long) => {
    return api.get(
        `/forecast/?lat=${lat}&lon=${long}&units=metric&APPID=${config.VITE_API_KEY}`,
    );
};

export const getWeatherByCity = city => {
    const options = {
        method: 'GET',
        url: `${config.VITE_API_URL_BASE}/weather`,
        params: {
            q: city,
            units: 'metric',
            appid: config.VITE_API_KEY,
        },
    };
    return axios
        .request(options)
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            console.error(error);
        });
};
