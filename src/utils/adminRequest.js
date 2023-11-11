import axios from 'axios'
import { GenerateError } from '../toast/toast'


const baseUrl = import.meta.env.VITE_ADMIN_URL

const axiosInterceptorInstance = axios.create({
    baseURL: baseUrl
})
axiosInterceptorInstance.interceptors.request.use((req)=> {
    if(localStorage.getItem("AdminToken")){
        req.headers.Authorization = "Bearer " + localStorage.getItem("AdminToken")
    }
    return req
})



axiosInterceptorInstance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response && error.response.status === 400) {
        GenerateError(error.response.data.message);
      }
     
      return Promise.reject(error);
    }
  );




export default axiosInterceptorInstance