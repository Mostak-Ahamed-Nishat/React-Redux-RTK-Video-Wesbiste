import axios from "../../utils/axios"

export const getVideos = async () => {
    const response = await axios.get('videos')
    return response.data
}

export const getTags = async () => {
    const response = await axios.get('tags')
    return response.data
}