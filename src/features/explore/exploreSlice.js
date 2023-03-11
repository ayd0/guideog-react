import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../../app/assets/shared/baseUrl";

export const fetchExploreList = createAsyncThunk(
    'explore/fetchExploreList',
    async () => {
        const response = await fetch(baseUrl + 'explore');

        if (!response.ok) {
            return Promise.reject('Unable to fetch, status: ' + response.status);
        }

        const data = await response.json();
        return data;
    }
);

const initialState = {
    exploreArray: [],
    isLoading: true,
    errMsg: ''
};

const exploreSlice = createSlice({
    name: "explore",
    initialState,
    reducers: {},
    extraReducers: {
        [fetchExploreList.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchExploreList.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errMsg = '';
            state.exploreArray = action.payload;
        },
        [fetchExploreList.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMsg = action.error ? action.error.message : 'Fetch failed';
        }
    }
});

export const exploreReducer = exploreSlice.reducer;

export const getNewCategories = (state) => {
    return state.explore.exploreArray.filter(item => item.listType='categories-new');
};