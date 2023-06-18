//import Files

import {
    getVideos
} from './videosApi'

import {
    createSlice,
    createAsyncThunk,
    // eslint-disable-next-line no-undef
} from '@reduxjs/toolkit'


//Initial state
const initialState = {
    videos: [],
    isLoading: false,
    isError: false,
    error: ''
}

//Create Thunk
export const fetchVideos = createAsyncThunk('videos/fetchVideos', async ({ tags, search }) => {
    const videos = await getVideos({ tags, search })
    return videos
})


//Reducer
const videosReducer = createSlice({
    name: 'videos',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchVideos.pending, (state) => {
                state.isError = false
                state.isLoading = true;
            })
            .addCase(fetchVideos.fulfilled, (state, action) => {
                state.isLoading = false;
                state.videos = action.payload
            })
            .addCase(fetchVideos.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.videos = [];
                state.error = action.error?.message
            })
    }
})

export default videosReducer.reducer