import axiosInterceptorInstance from "../utils/artistRequest";

const artistApi =axiosInterceptorInstance

export async function ArtistSignup(signupData){
try {
    const data= artistApi.post('/artist/signup',signupData)
    return data
} catch (error) {
    console.log(error);
}
}

export async function ArtistSignupWithGoogle(gSignupData){
    try {
        const data =artistApi.post('/artist/gsignup',gSignupData)
        return data
    } catch (error) {
        console.log(error);
    }
}

export async function Login(LoginData){
    try {
        const data=artistApi.post('/artist/login',LoginData)
        return data
    } catch (error) {
        console.log(error);
    }
}
export async function GLogin(LoginData){
    try {
        const data=artistApi.post('/artist/Glogin',LoginData)
        return data
    } catch (error) {
        console.log(error);
    }
}

export async function Verify(id,token){
    try {
        const data = await artistApi.get(`/artist/${id}/verify/${token}`)
    return data
    } catch (error) {
        console.log(error);
    }
}


export async function sendMail(email){
    try {
        console.log(email);
        const data=await artistApi.post('/passwordMail',{email})
        return data
    } catch (error) {
        console.log(error);
    }
}


export async function CheckPassword(password){
    try {
        const data=await artistApi.post('/checkpassword',{password})
        return data
    } catch (error) {
        console.log(error);
    }
}

export async function addProfile(values,id){
    try {
        console.log(values,id);
        const data=await artistApi.put(`/addProfile/${id}`,values,{headers:{
            "Content-Type":"multipart/form-data"
          }})
        
        return data
    } catch (error) {
        console.log(error);
    }
}

export async function editArtistProfile(values,id){
    try {
        console.log(values,id,"jkhjkjk");
        const data=await artistApi.put(`/editProfile/${id}`,values,{headers:{
            "Content-Type":"multipart/form-data"
          }})
        
        return data
    } catch (error) {
        console.log(error);
    }
}


export async function postImages(values,id){
    try {
        console.log(values,id);
        const data=await artistApi.put(`/postImages/${id}`,values,{headers:{
            "Content-Type":"multipart/form-data"
          }})
        
        return data
    } catch (error) {
        console.log(error);
    }
}


export async function DateVerify(){
    try {
        const data=await artistApi.get('/datenotification')
        return data
    } catch (error) {
        console.log(error);
    }
}

export async function ApproveBooking(changeData){
    try {
        const data=await artistApi.put('/updatebooking',{changeData})
        return data
    } catch (error) {
        console.log(error);
    }
}
export async function GetAllOrders(){
    try {
        const data=await artistApi.get('/getAllOrders')
        return data
    } catch (error) {
        console.log(error);
    }
}
export async function DoctorMessage(messageContent){
    try {
        const data=await artistApi.post('/message',messageContent)
        return data
    } catch (error) {
        console.log(error);
    }
}
export async function FetchChat(userId){
    try {
        const data=await artistApi.get(`/fetchchat/${userId}`)
        return data
    } catch (error) {
        console.log(error);
    }
}