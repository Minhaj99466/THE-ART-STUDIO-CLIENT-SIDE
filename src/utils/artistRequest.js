import axios from 'axios'

const baseUrl = import.meta.env.VITE_ARTIST_URL

const artistRequest = axios.create({
    baseURL: baseUrl
})
artistRequest.interceptors.request.use((req)=> {
    if(localStorage.getItem("ArtistToken")){
        req.headers.Authorization = "Bearer " + localStorage.getItem("ArtistToken")
    }
    return req
})

export default artistRequest