import { createSlice } from '@reduxjs/toolkit';

const geolocationSlice = createSlice({
    name: 'geolocation',
    initialState: {
        isLoading: false,
        error: '',
        location: {
            latitude: '',
            longitude: '',
        },
        city: '',
    },
    reducers: {
        geolocationFail: (state, { payload }) => {
            state.isLoading = false;
            state.error = payload;
            state.location = {};
        },
        geolocationPending: state => {
            state.isLoading = true;
        },
        geolocationSuccess: (state, { payload }) => {
            state.isLoading = false;
            state.error = '';
            state.location = {
                latitude: payload.latitude,
                longitude: payload.longitude,
            };
        },
        updateCity: (state, { payload }) => {
            state.city = payload;
        },
    },
});

export const {
    geolocationFail,
    geolocationPending,
    geolocationSuccess,
    updateCity,
} = geolocationSlice.actions;
export default geolocationSlice.reducer;
