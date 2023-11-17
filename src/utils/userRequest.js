import axios from 'axios'
import { GenerateError } from "../toast/toast";


const baseUrl = import.meta.env.VITE_USERURL


const axiosInterceptorInstance = axios.create({
    baseURL: baseUrl
})
axiosInterceptorInstance.interceptors.request.use((req)=> {
    if(localStorage.getItem("UserToken")){
        req.headers.Authorization = "Bearer " + localStorage.getItem("UserToken")
    }
    return req
})



axiosInterceptorInstance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response && error.response.status === 400) {
        GenerateError(error.response.data.message);
      }
      if (error.response && error.response.status === 500) {
        GenerateError(error.response.data.message);
        localStorage.removeItem('UserToken')
        window.location = '/login'
      }
      return Promise.reject(error);
    }
  );


export default axiosInterceptorInstance