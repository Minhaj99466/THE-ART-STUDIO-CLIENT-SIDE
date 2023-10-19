import artistRequest from "../utils/artistRequest";

const artistApi =artistRequest

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

export async function Verify(id,token){
    try {
        console.log("jhjkhjk");
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

export async function addProfile(values){
    try {
        const data=await artistApi.post('/addProfile',values,{headers:{
            "Content-Type":"multipart/form-data"
          }})
        
        return data
    } catch (error) {
        console.log(error);
    }
}
