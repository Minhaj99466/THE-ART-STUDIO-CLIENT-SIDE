import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
    Input,
  } from "@material-tailwind/react";
  // import {Formik} from 'formik'
  import Lock from '../../assets/userAssets/Lock.jpg'
  import { useEffect, useState } from "react";
  import { ToastContainer } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";
  import  {CheckPassword}  from "../../api/artistApi";
  import { useNavigate, useParams } from "react-router-dom";
  import { GenerateError } from "../../toast/toast";
  
  
  
  export default function Forget() {
    const navigate=useNavigate()
    const params=useParams()
      const [password,setPassword]=useState({password:null,confirmPassword:null})
      const [paramId,setParams]=useState('')
      
     useEffect(()=>{
        setParams(params.id)
     },[params])
  
      const handleSubmit=async(e)=>{
          e.preventDefault()
          try {
          const res=await CheckPassword({password,paramId})
          if(res.data.change){
            navigate('/artist/login')
          }else{
            GenerateError(res.data.message)
          }

          } catch (error) {
              GenerateError(error)
          }
      }
    return (
      <>
        {" "}
        <div className="flex justify-center items-center h-screen bg-[#7e7c78]">
          <Card className="w-full max-w-[48rem] flex-row">
            <CardHeader
              shadow={false}
              floated={false}
              className="m-0 w-2/5 shrink-0 rounded-r-none hidden sm:block"
            >
              <img
                src={Lock}
                alt="card-image"
                className="h-full w-full object-cover "
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h4" color="blue-gray">
                Change Password 
              </Typography>
              <Typography color="gray" className="mt-1 font-normal">
                Enter your email to reset Password
              </Typography>
              <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 "  onSubmit={handleSubmit}>
            
                <div className="mb-4 flex flex-col gap-3">
                  <Input variant="outlined" size="lg" name="password" onChange={(e)=>setPassword({...password,password:e.target.value})} label="Password" />
                  <Input variant="outlined" size="lg" name="Password" onChange={(e)=>setPassword({...password,confirmPassword:e.target.value})} label="PasswordConfirm" />
                  <Button type="submit" className="mt-6 " fullWidth>
                     Submit
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
  