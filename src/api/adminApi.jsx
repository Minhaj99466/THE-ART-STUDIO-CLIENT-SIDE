import AdminRequest from "../utils/adminRequest";


const adminApi=AdminRequest


export async function Login(loginData){
    try {
    const data=adminApi.post('/admin/login',loginData)
    return data
    } catch (error) {
        console.log(error);
    }
}

export async function manageAction(userId){
    try {
        console.log(userId);
       const data=adminApi.patch('/admin/manageuser',userId)
        return data
    } catch (error) {
        console.log(error);
    }
}
export async function manageArtistAction(userId){
    try {
        console.log(userId);
       const data=adminApi.patch('/admin/manageartist',userId)
        return data
    } catch (error) {
        console.log(error);
    }
}