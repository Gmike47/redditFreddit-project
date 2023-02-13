import { createSlice } from '@reduxjs/toolkit';
import { getSubreddits } from '../util/api';

const initialState = {
    subReddits: [],
    error: false,
    isLoading: false
};

const subRedditSlice = createSlice({
    name: 'subReddits',
    initialState,
    reducers: {
        startGetSubReddits(state) {
            state.isLoading = true;
            state.error = false;
        },
        getSubRedditsSuccess(state, action) {
            state.subReddits = action.payload;
            state.isLoading = false;
        },
        getSubRedditsRejected(state) {
            state.isLoading = false;
            state.error = true;
        }
    }
});

export const {
    startGetSubReddits,
    getSubRedditsSuccess,
    getSubRedditsRejected
} = subRedditSlice.actions;

export default subRedditSlice.reducer;

export const fetchSubReddits = () => async (dispatch) => {
    try {
        dispatch(startGetSubReddits());
        const subReddits = await getSubreddits();
        dispatch(getSubRedditsSuccess(subReddits));
    } catch (error) {
        dispatch(getSubRedditsRejected());
    }
};

export const selectSubReddits = (state) => state.subReddits.subReddits;