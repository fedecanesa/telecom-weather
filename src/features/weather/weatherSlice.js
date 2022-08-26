import { createSlice } from '@reduxjs/toolkit';

const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        isLoadingWeather: false,
        error: '',
        weather: [],
        forecast: [],
        unit: 'metric',
    },
    reducers: {
        weatherFail: (state, { payload }) => {
            state.isLoadingWeather = false;
            state.error = payload;
            state.weather = {};
        },
        weatherPending: state => {
            state.isLoadingWeather = true;
        },
        weatherSuccess: (state, { payload }) => {
            state.isLoadingWeather = false;
            state.error = '';
            state.weather = [payload];
        },
        handleForecast: (state, { payload }) => {
            state.isLoadingWeather = false;
            state.error = '';
            state.forecast = payload;
        },
        updateUnit: (state, { payload }) => {
            state.unit = payload;
        },
    },
});

export const {
    weatherFail,
    weatherPending,
    weatherSuccess,
    handleForecast,
    updateCity,
    updateUnit,
} = weatherSlice.actions;
export default weatherSlice.reducer;
