import axios from "../../utils/axios"

export const getVideos = async ({tags, search}) => {
    //Define the variable
    let queryString = ''

    //If there are tags
    if (tags?.length>0) {
        queryString += tags.map(tag => `tags_like=${tag}`).join('&')
        console.log(queryString);
    }

    //If there are search values
    if (search) {
        queryString += `&q=${search}`
    }
    const response = await axios.get('videos/?' + queryString)
    return response.data
}