import { Alert, Spinner, Typography, Button } from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
import adminRequest from "../../utils/adminRequest";
import { useNavigate } from "react-router-dom";
import { GenerateError } from "../../toast/toast";
import {Loading} from '../Common/ArtistcommonComponents/Loading/Loading'

function IconOutlined() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="blue"
            className="h-6 w-6"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
            />
        </svg>
    );
}

export default function Notifications() {
    const navigate = useNavigate()
    const { isLoading, error, data } = useQuery({
        queryKey: ["notVerified"],
        queryFn: () => adminRequest.get("/notVerified").then((res) => res.data)
        
    })
    console.log(data);
    if (isLoading) {
        return (
            <Loading/>
        );
    }
    if (error) {
        console.log(error);
        if (error.response) {
          if (error.response.status === 403) {
            GenerateError(error.response.data.data.message)
            localStorage.removeItem("AdminToken")
            navigate("/admin/login")
          }
        } else {
          return <p>somthing went wrong</p>
        }
    
      }

    return (

        <>
            {data ?(data.data.map(({ name, _id }) => (

                <div className="flex w-full flex-col gap-2 p-3 " key={_id}>
                    <Alert
                        icon={<IconOutlined />}
                        className="bg-[#c5d3c8] "
                        action={
                            <Button variant="text"
                                color="blue-gray"
                                size="md"
                                className="!absolute top-6 right-3" onClick={() => navigate(`/admin/verification/${_id}`)}>view</Button>

                        }
                    >
                        <Typography className="font-medium text-blue-gray-900">
                           Request for  Confirmation
                        </Typography>

                        <ul className="mt-2 ml-2 list-inside list-disc text-blue-gray-600">
                            <li>{`Artist ${name.toUpperCase()} Request for Profile Confirmation`}</li>
                        </ul>
                    </Alert>

                </div>
            ))):( <div className="flex items-center justify-center h-full"> No Notification</div> )}
        </>


    );
}