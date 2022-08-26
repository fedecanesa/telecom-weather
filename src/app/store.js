import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from '../features/weather/weatherSlice';
import geolocationReducer from '../features/geolocation/geolocationSlice';

export const store = configureStore({
    reducer: {
        weather: weatherReducer,
        geolocation: geolocationReducer,
    },
});
