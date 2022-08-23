import { createSlice } from '@reduxjs/toolkit';

const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        isLoading: false,
        error: '',
        weather: {},
        filterStatus: '',
    },
    reducers: {
        fail: (state, { payload }) => {
            state.isLoading = false;
            state.error = payload;
            state.weather = {};
        },
        pending: state => {
            state.isLoading = true;
        },
        success: (state, { payload }) => {
            state.isLoading = false;
            state.error = '';
            state.weather = payload;
        },
        updateFilter: (state, { payload }) => {
            state.filterStatus = payload;
        },
    },
});

export const { fail, pending, success, updateFilter } = weatherSlice.actions;
export default weatherSlice.reducer;
