import {
    configureStore
} from '@reduxjs/toolkit'
import videoReducer from '../features/videos/videosSlice'
import tagsReducer from '../features/tags/tagsSlice'

const store = configureStore({
    reducer: {
        videos: videoReducer,
        tags:tagsReducer
    }
})

export default store