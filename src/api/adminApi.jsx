
import axiosInterceptorInstance from "../utils/adminRequest";

const adminApi = axiosInterceptorInstance;

export async function Login(loginData) {
  try {
    const data = await adminApi.post("/admin/login", loginData);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function GetUsers(search,active) {
  try {
    const data = await adminApi.get(`/admin/users/${search}/${active}`);
    return data;
  } catch (error) {
   
    console.log(error);
  }
}

export async function GetArtists(search,value) {
  try {
    const data = await adminApi.get(`/admin/artist/${search}/${value}`);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function manageAction(userId) {
  try {
    console.log(userId);
    const data = await adminApi.patch("/admin/manageuser", userId);
    return data;
  } catch (error) {
    console.log(error);
  }
}
export async function manageArtistAction(userId) {
  try {
    console.log(userId);
    const data = await adminApi.patch("/admin/manageartist", userId);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function verifyArtist(id) {
  try {
    const data = await adminApi.put(`/verify/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
}
export const DashBoard = async () =>{
  try {
    const data =await adminApi.get('/dashboard')
    return data
  } catch (error) {
    console.log(error.message);
  }
}
