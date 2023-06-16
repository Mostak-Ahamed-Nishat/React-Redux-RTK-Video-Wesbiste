import {
    configureStore
} from '@reduxjs/toolkit'
import videosReducer from '../features/videos/videosSlice'
import tagsReducer from '../features/tags/tagsSlice'
import videoReducer from '../features/video/videoSlice'

const store = configureStore({
    reducer: {
        videos: videosReducer,
        tags:tagsReducer,
        video:videoReducer
    }
})

export default store