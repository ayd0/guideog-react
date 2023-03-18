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

// seperate state into 2d array for easier button handling
const handleExploreArrayState = (payload) => {
    const listTypes = parseInt(payload[0].listTypes);
    payload.shift();

    let stateSections = [];
    let counter = 0;

    for (let i = 0; i < listTypes; ++i) {
        if (counter < payload.length) {
            const listType = payload[counter].listType;
            let section = [];

            while (
                counter < payload.length &&
                listType === payload[counter].listType
            ) {
                section.push(payload[counter].itemName);
                ++counter;
            }

            stateSections.push(section);
        }
    }

    return stateSections;
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
            state.exploreArray = handleExploreArrayState(action.payload);
        },
        [fetchExploreList.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMsg = action.error ? action.error.message : 'Fetch failed';
        }
    }
});

export const exploreReducer = exploreSlice.reducer;

export const getExploreList = (state) => {
    return state.explore.exploreArray;
};