import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
  Button,
} from "@material-tailwind/react";

import { useQuery } from "@tanstack/react-query";
import UserRequest from "../../utils/userRequest";
import { InfinitySpin } from "react-loader-spinner";
import {
  // UserCircleIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ProfileCard() {
  const navigate=useNavigate()


  const { isLoading, error, data } = useQuery({
    queryKey: ["artist"],
    queryFn: () => UserRequest.get("/allArtists").then((res) => res.data),
  });
  if (isLoading) return <InfinitySpin width="200" color="#4fa94d" />;

  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      <div className="grid  gap-12 grid-cols-1 md:grid-cols-3 sm:grid-cols-2 ">
        {data.Artists ? (
          data.Artists.map((item) => (
            <Card className="w-full  mt-10 sm:grid justify-center" key={item._id} onClick={()=>navigate(`/singleView/${item._id}`)}>
              <CardHeader floated={false}>
                <img
                  className="bg-cover"
                  src={item.displaypicture}
                  alt="profile-picture"
                />
              </CardHeader>
              <CardBody className="text-start ">
                <Typography variant="h4" color="blue-gray" className="mb-2">
                  {item.name}
                </Typography>

                <Typography
                  color="blue-gray"
                  className="font-medium"
                  textGradient
                >
                  {item.category}
                </Typography>
              </CardBody>

              <CardFooter className="flex justify-end gap-7 pt-2">
                <HeartIcon className="w-5 h-5 text-red-900" />
              </CardFooter>
            </Card>
          ))
        ) : (
          <h1>hello</h1>
        )}
      </div>
    </>
  );
}
