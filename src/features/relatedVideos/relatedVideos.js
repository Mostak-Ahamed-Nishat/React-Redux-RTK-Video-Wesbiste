import {
    createAsyncThunk,
    createSlice
} from "@reduxjs/toolkit"
import {
    getRelatedVideos
} from "./relatedVideosApi"


//Async Thunk

export const fetchRelatedVideos = createAsyncThunk('relatedVideos/fetchRelatedVideos', async ({tags,id}) => {
    const videos = await getRelatedVideos({tags,id})
    return videos
})

//Initial state
const initialState = {
    relatedVideos: [],
    isLoading: false,
    isError: false,
    error: ''
}

const relatedVideosReducer = createSlice({
    name: 'relatedVideos',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchRelatedVideos.pending, (state) => {
            state.isLoading = true;
            state.isError = false
        }).addCase(fetchRelatedVideos.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.relatedVideos = action.payload
        }).addCase(fetchRelatedVideos.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.error = action.error.message
        })
    }
})

export default relatedVideosReducer.reducer