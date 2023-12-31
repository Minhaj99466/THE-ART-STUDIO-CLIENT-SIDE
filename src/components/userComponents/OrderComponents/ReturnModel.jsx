import React, { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Textarea,
} from "@material-tailwind/react";
import { Typography } from "antd";
import { CancelBooking } from "../../../api/userApi";
 
export default function CancelDialog({id,totalAmount,handleFetch}) {
  const [reason,setReason]=useState('')
  const [open, setOpen] = React.useState(false);
  console.log(id);
  console.log(totalAmount);
  const handleOpen = () => setOpen(!open);

  const handleSubmit = async () => {
        try {
          const res = await CancelBooking({reason,id,totalAmount});
          console.log(res);
        } catch (error) {
          console.log(error);
        }
        handleFetch(true)
     handleOpen()
  }



    
  return (
    <>
      <Button onClick={handleOpen} className="bg-red-900">Cancel</Button>
    <Dialog open={open} size="xs" handler={handleOpen} >
        <div className="flex items-center justify-between">
          <DialogHeader className="flex flex-col items-start">
            {" "}
            <Typography className="mb-1" variant="h4">
             Reason for cancel {" "}
            </Typography>
          </DialogHeader>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="mr-3 h-5 w-5"
            onClick={handleOpen}
          >
            <path
              fillRule="evenodd"
              d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <DialogBody>
          <Typography className="mb-10 -mt-7 " color="gray" variant="lead">
            Write the reason and then click button.if You agree  To cancel
          </Typography>
          <div className="grid gap-6">
            <Textarea label="Reason for cancel" onChange={(e)=>setReason(e.target.value)}/>
          </div>
        </DialogBody>
        <DialogFooter className="space-x-2">
          <Button variant="text" color="gray" onClick={handleOpen}>
            cancel
          </Button>
          <Button variant="gradient" color="gray" onClick={handleSubmit}>
            Submit
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}