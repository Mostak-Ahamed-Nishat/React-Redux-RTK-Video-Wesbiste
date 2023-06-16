import {
    createAsyncThunk,
    createSlice
} from '@reduxjs/toolkit'

import {
    getTags
} from '../videos/videosApi'

export const fetchTags = createAsyncThunk('tags/fetchTags', async () => {
    const tags = await getTags()
    console.log("***TAGS****");
    console.log(tags);
    return tags
})


const initialState = {
    isLoading: false,
    tags: [],
    isError: false,
    error: ''
}

const tagsReducer = createSlice({
    name: 'tags',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchTags.pending, (state) => {
            state.isError = false;
            state.isLoading = true;

        }).addCase(fetchTags.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.tags = action.payload
        }).addCase(fetchTags.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.error = action.error.message
        });
    }

})

export default tagsReducer.reducer