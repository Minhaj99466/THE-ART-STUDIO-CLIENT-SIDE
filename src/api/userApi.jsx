
import userRequest from '../utils/userRequest'


const userApi=userRequest


export async function UserSignup(signupData){
    try {
        const data = await userApi.post('/signup',signupData,{
            withCredentials:true
        })
        return data
    } catch (error) {
        console.log(error);
    }

}

export async function  UserSignupWithGoogle(gUserData){
    try {
        const gdata = await userApi.post('/gsignup',gUserData)
        return gdata
    } catch (error) {
        console.log(error);
    }
} 

export async function UserLogin(loginData){
    try {
        const data=await userApi.post('/login',loginData)
        return data
    } catch (error) {
        console.log(error);  
    }
}
export async function Verify(id,token){
    try {
        const data = await userApi.get(`/${id}/verify/${token}`)
    return data
    } catch (error) {
        console.log(error);
    }
    
}

export async function sendMail(email){
    try {
        console.log(email);
        const data=await userApi.post('/passwordMail',{email})
        return data
    } catch (error) {
        console.log(error);
    }
}


export async function CheckPassword(password){
    try {
        const data=await userApi.post('/checkpassword',{password})
        return data
    } catch (error) {
        console.log(error);
    }
}
export async function getArtistDetails({id}){
    try {
        
        const data=await userApi.get(`/artistDetails/${id}`)
        return data
    } catch (error) {
        console.log(error);
    }
}