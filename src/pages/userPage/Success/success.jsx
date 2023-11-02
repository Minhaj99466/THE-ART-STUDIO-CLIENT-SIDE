import { Button, Card, Typography } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { CheckCircleIcon } from "@heroicons/react/24/outline"

export function Success() {
  const navigate = useNavigate()
  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center">
        <div className="p-5 h-96 flex flex-col justify-center items-center bg-transparent">
          <CheckCircleIcon className="h-20 w-20 md:h-52 md:w-52 text-[#2a6f32]" />
         
          <Typography variant="h3" className="text-[#000000]">YOUR SLOT IS BOOKED SUCCESSFULLY </Typography>
          <Typography variant="h3" className="m-3">thank you for choosing us </Typography>
          <Typography variant="h5" className="m-3">Please wait for Artist Confirmation(it takes a while) </Typography>
          <Button variant="outlined" color="brown" onClick={() => navigate("/")}>take me to home </Button>
        </div>
      </div>
    </>
  )
}