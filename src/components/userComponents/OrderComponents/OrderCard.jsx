import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { GetOrderDetail } from "../../../api/userApi";
import { useSelector } from "react-redux";
   
  export default function CardDefault() {
    const [data,setData]=useState()

    const userInfo = useSelector((state) => state.user.userInfo);
    const id= userInfo.email

    useEffect(()=>{
        const fetchData=async()=>{
            try {
                const res=await GetOrderDetail(id)
                setData(res.data)
            } catch (error) {
                console.log(error);
            }

        }
fetchData()
    },[])
    console.log(data);


    return (
    <div className="grid grid-cols-3">   
      {data && data.bookingData.map(({fromDate,toDate,totalAmount,status,artistId})=>(
     <Card className="mt-6 w-72 bg" key={fromDate} >
        <CardHeader  className="flex justify-center h-52 ">
          <img
            src={artistId.displaypicture}
            alt="card-image"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h4" color="blue-gray" className="mb-2">
            {artistId.name}
          </Typography>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            From:{fromDate} 
          </Typography>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            To: {toDate}
          </Typography>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            Amount:{totalAmount} Paid
          </Typography>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            Status:{status} 
          </Typography>
          
         
        </CardBody>
        <CardFooter className="pt-0 flex justify-center">
            {status=="Approved" || status=="Pending"?<Button className="bg-red-900">Cancel</Button>:null}
          
        </CardFooter>
      </Card>
      ))}
      </div>

    );
  }