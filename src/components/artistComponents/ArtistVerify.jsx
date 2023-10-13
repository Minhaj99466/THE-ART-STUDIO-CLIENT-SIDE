
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
  } from "@material-tailwind/react";
  import { useState,useEffect } from "react"
  import img from '../../assets/artistsAssets/Email campaign-bro.png'
  
  import { useNavigate,useParams } from "react-router-dom"
 import { Verify } from "../../api/artistApi";
  
  export default function EmailVerify() {
  
      const[validUrl,setValidUrl]=useState(false)
      const navigate=useNavigate()
      const params=useParams()
  
  useEffect(()=>{
      const verifyEmailUrl=async()=>{
          try {
              const res=await Verify(params.id,params.token)
              console.log(res);
              if(res){
                  console.log(res);
              setValidUrl(true)
              }
              
          } catch (error) {
              console.log(error);
              setValidUrl(false)
          }
      }
      verifyEmailUrl()
  },[params])
  
    return (
        <>
        {validUrl ?(
             
             
             <div className=" flex justify-center items-center h-screen bg-[#F6E2D3]">
               <Card className="w-full max-w-[48rem] ">
                 <CardHeader
                   shadow={false}
                   floated={false}
                   className="m-0 w-2/5 shrink-0 rounded-r-none hidden sm:block"
                 >
                   <img 
                     src={img}
                     alt="card-image"
                     className="h-full w-full object-cover "
                   />
                 </CardHeader>
                 <div >
                 <CardBody >
                   <Typography className="font-sans" variant="h4"  color="blue-gray">
                    CONGRATULATIONS 
                   </Typography>
                   <Typography color="gray" className="mt-1 font-semibold">
                      Welcome to  THE ART STUDIO as an Artist
                   </Typography>
                   <Button onClick={()=>navigate('/artist/login')}>Verify</Button>
                   
                 </CardBody>
                 </div>
               </Card>
             </div>
          
        ):(
          <h1>404 Not Found</h1>
        )}
        </>
     
    )
  }
  