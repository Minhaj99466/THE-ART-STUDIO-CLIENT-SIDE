import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  Input,
} from "@material-tailwind/react";
// import {Formik} from 'formik'
import Img from "../../assets/userAssets/download (3).jpg";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import  {sendMail}  from "../../api/userApi";
import { GenerateError, GenerateSuccess } from "../../toast/toast";



export default function Forget() {
    
    const [email,setEmail]=useState('')

    const handleSubmit=async(e)=>{
        e.preventDefault()
        try {
        const res=await sendMail(email)
        GenerateSuccess(res.data.message)
        } catch (error) {
            GenerateError(error);
        }
        
    }


  return (
    <>
      {" "}
      <div className="flex justify-center items-center h-screen bg-[#F6E2D3]">
        <Card className="w-full max-w-[48rem] flex-row">
          <CardHeader
            shadow={false}
            floated={false}
            className="m-0 w-2/5 shrink-0 rounded-r-none hidden sm:block"
          >
            <img
              src={Img}
              alt="card-image"
              className="h-full w-full object-cover "
            />
          </CardHeader>
          <CardBody>
            <Typography variant="h4" color="blue-gray">
              Reset Password
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              Enter your email to reset Password
            </Typography>
            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 "  onSubmit={handleSubmit}>
          
              <div className="mb-4 flex flex-col gap-3">
                <Input variant="static" size="lg" name="email" onChange={(e)=>setEmail(e.target.value)} label="Email" />
                <Button type="submit" className="mt-6 " fullWidth>
                   reset
                </Button>
              </div>
            </form>

           
          </CardBody>
        </Card>
      </div>
      <ToastContainer />
    </>
  );
}
