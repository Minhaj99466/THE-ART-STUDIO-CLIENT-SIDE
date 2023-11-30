import {
  Card,
  CardBody,
  Typography,
} from "@material-tailwind/react";


import { useQuery } from "@tanstack/react-query";
import "react-toastify/dist/ReactToastify.css";
import ArtistRequest from "../../utils/artistRequest";

import EditDialog from "../../components/artistComponents/EditProfile";
import { useLocation, useNavigate } from "react-router-dom";
import DialogWithForm from "./AddProfile";
import { InfinitySpin } from "react-loader-spinner";
import { Loading } from "../../components/Common/ArtistcommonComponents/Loading/Loading";



export default function ProfileCard() {
  const navigate = useNavigate();

  const location = useLocation();
  const id = location.state.id;

  const { isLoading, error, data } = useQuery({
    queryKey: ["artist"],
    queryFn: () =>
      ArtistRequest.get(`/Profiledetails/${id}`).then((res) => res.data),
  });

  if (isLoading) return <Loading/>;

  if (error) {
    if (error.response) {
      if (error.response.status === 500) {
        localStorage.removeItem("ArtistToken");
        navigate("/artist/login");
      }
    } else {
      return <p>somthing went wrong</p>;
    }
  }

  return (
    <>
      <div className="relative bg-[#ccddd6] rounded-xl p-4">
        {data.profileData.is_profile ? (
          <EditDialog artist={data.profileData} />
        ) : null}

        <div>
          <div className="flex justify-center  h-72">
            <img
              src={
                data.profileData.displaypicture && data.profileData.is_profile
                  ? data.profileData.displaypicture
                  : "https://i.pinimg.com/564x/b8/9f/51/b89f51fbde04ae076fc2d6350f60e891.jpg"
              }
              alt="card-image"
              className="rounded-full w-72"
            />
          </div>
          <Card className=" grid  ">
            <CardBody className="flex justify-center items-center ">
              <div>
                <Typography
                  className="flex justify-center "
                  variant="h4"
                  color="blue-gray"
                >
                  {data.profileData.name.toUpperCase()}
                </Typography>

                <Typography
                  color="gray"
                  className="mt-1 font-normal flex justify-center"
                >
                  {data.profileData.description && data.profileData.is_profile
                    ? data.profileData.description
                    : "Enter your details to register."}
                </Typography>
                {data.profileData.is_profile ? (
                  <div className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                    <div className="mb-4 flex flex-col gap-3">
                      <h1 className="font-bold text-blue-gray-400 ">
                        Category:
                        <span className="font-medium text-black">
                          {data.profileData.category.toUpperCase()}
                        </span>
                      </h1>
                      <h1 className="font-bold text-blue-gray-400">
                        Experience:{" "}
                        <span className="font-medium text-black">
                          {data.profileData.experience} years
                        </span>
                      </h1>
                      <h1 className="font-bold text-blue-gray-400">
                        Place:
                        <span className="font-medium text-black">
                          {data.profileData.place}
                        </span>
                      </h1>
                    </div>
                  </div>
                ) : (
                  <div className="flex justify-center pt-8">
                    <DialogWithForm />
                  </div>
                )}
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </>
  );
}
