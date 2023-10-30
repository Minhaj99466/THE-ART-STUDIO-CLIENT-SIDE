import axios from 'axios'

const baseUrl = import.meta.env.VITE_USERURL

const userRequest = axios.create({
    baseURL: baseUrl
})
userRequest.interceptors.request.use((req)=> {
    if(localStorage.getItem("UserToken")){
        req.headers.Authorization = "Bearer " + localStorage.getItem("UserToken")
    }
    return req
})

export default userRequest