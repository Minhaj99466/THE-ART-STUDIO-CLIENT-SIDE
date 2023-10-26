import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Avatar,
} from "@material-tailwind/react";

// import {Formik} from 'formik'
import Posts from "./SinGleProfilePost";
import { useParams } from "react-router-dom";
import { InfinitySpin } from "react-loader-spinner";

import { useQuery } from "@tanstack/react-query";

import { getArtistDetails } from "../../../api/userApi";

export default function Signup() {
  const { id } = useParams();

  const { isLoading, error, data } = useQuery({
    queryKey: ["artistData1"],
    queryFn: () => getArtistDetails({ id }).then((res) => res.data),
  });

  if (isLoading) return <InfinitySpin width="200" color="#4fa94d" />;

  if (error) return "An error has occurred: " + error.message;


  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 ">
        <div className=" mt-8">
          <Posts />
        </div>

        <div className=" h-screen grid  justify-center  ">
          <div className=" grid justify-center items-center ">
            {data._id ? (
              <Card
                shadow={false}
                className="relative grid h-[36rem] w-full max-w-[28rem] justify-center overflow-hidden text-center border shadow-xl "
              >
                <CardHeader
                  floated={false}
                  shadow={false}
                  color="transparent"
                  className="absolute inset-0 m-0 h-full w-full rounded-none bg-[#fff] bg-cover bg-center"
                >
                  <div className="to-bg-black-10  inset-0 h-full w-full bg-gradient-to-r from-gray-50 to-orange-50 " />
                </CardHeader>
            
                  <CardBody  className="relative py-10  md:px-12">
                    <Avatar
                      size="xxl"
                      variant="rounded"
                      alt="tania andrew"
                      className="border-2 border-white"
                      src={data.displaypicture}
                    />
                    <Typography variant="h4" className="mb-4 text-gray-700">
                      {data.name}
                    </Typography>
                    <Typography
                      variant="h6"
                      className="mb-4 text-blue-gray-500 underline"
                    >
                      About The Artist
                    </Typography>
                    <Typography
                      variant="h5"
                      color="black"
                      className=" font-light leading-[1.5] text-start mb-4"
                    >
                      {data.description}
                    </Typography>
                    <div className="grid justify-start">
                      <Typography
                        variant="h6"
                        className="mb-4 text-gray-700 text-start"
                      >
                        Category:{data.category}
                      </Typography>
                      <Typography
                        variant="h6"
                        className="mb-4 text-gray-700 text-start"
                      >
                        Year Of Experience:{data.experience}years
                      </Typography>
                      <Typography
                        variant="h6"
                        className="mb-4 text-gray-700 text-start"
                      >
                        Place:{data.place}
                      </Typography>
                      <Typography
                        variant="h6"
                        className="mb-4 text-gray-700 text-start"
                      >
                        Mobile:{data.mobile}
                      </Typography>
                    </div>
                    <Typography variant="h6" className="mb-4 text-gray-700 ">
                      ₹{data.fees}/day
                    </Typography>
                    <Button>Book Now</Button>
                  </CardBody>
                
              </Card>
            ) : (
              <div>
                <h1>hello</h1>
              </div>
            )}
          </div>
         
        </div>
      </div>
    </>
  );
}
