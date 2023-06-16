import {
    createAsyncThunk,
    createSlice
} from "@reduxjs/toolkit"

import {
    getVideo
} from "./videoApi"


export const fetchVideo = createAsyncThunk('video/fetchVideo', async (id) => {
    const video = await getVideo(id)
    return video
})


const initialState = {
    isLoading: false,
    video: {},
    isError: false,
    error: ''
}

const videoReducer = createSlice({
    name: 'video',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchVideo.pending, (state, action) => {
            state.isError = false;
            state.isLoading = true;
        }).addCase(fetchVideo.fulfilled, (state, action) => {
            state.isError = false;
            state.isLoading = false;
            state.video = action.payload
        }).addCase(fetchVideo.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true;
            state.video = {};
            state.error = action.error?.message
        })
    }
})

export default videoReducer.reducer