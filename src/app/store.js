import {
    configureStore
} from '@reduxjs/toolkit'
import videoReducer from '../features/videos/videosSlice'

const store = configureStore({
    reducer: {
        videos: videoReducer
    }
})

export default store