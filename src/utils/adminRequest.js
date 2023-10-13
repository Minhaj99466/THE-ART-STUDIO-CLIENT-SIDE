import axios from 'axios'

const baseUrl = import.meta.env.VITE_ADMIN_URL

const AdminRequest = axios.create({
    baseURL: baseUrl
})
AdminRequest.interceptors.request.use((req)=> {
    if(localStorage.getItem("AdminToken")){
        req.headers.Authorization = "Bearer " + localStorage.getItem("AdminToken")
    }
    return req
})

export default AdminRequest