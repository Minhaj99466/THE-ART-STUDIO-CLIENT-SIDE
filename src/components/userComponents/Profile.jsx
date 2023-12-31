import {
    Card,
    //   CardHeader,
    CardBody,
    Typography,
    Button,
    Input,
    Spinner,
  } from "@material-tailwind/react";
  
  // import {Formik} from 'formik'
  // import Img from "../../assets/artistsAssets/artistSign.jpg";
  import { useQuery } from "@tanstack/react-query";
  import { ToastContainer } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";
  import ArtistRequest from "../../utils/artistRequest";
  // import { useFormik } from "formik";
  // import { SignupSchema } from "../../yup/validation";
  import EditDialog from "../../components/artistComponents/EditProfile";
  import { useLocation } from "react-router-dom";
  import DialogWithForm from "./AddProfile";
  import { InfinitySpin } from "react-loader-spinner";
  
  export default function ProfileCard() {
    // const navigate=useNavigate()
  
  
  
    const location = useLocation();
    const id = location.state.id;
  
    const { isLoading, error, data } = useQuery({
      queryKey: ["artist"],
      queryFn: () =>
        ArtistRequest.get(`/Profiledetails/${id}`).then((res) => res.data),
    });
  
    if (isLoading) return <InfinitySpin width="200" color="#4fa94d" />;
  
    if (error) return "An error has occurred: " + error.message;
  
    return (
      <>
        <div className="relative bg-[#ccddd6] rounded-xl p-4">
          {data.profileData.is_profile ? <EditDialog artist={data.profileData} /> : null}
  
          <div>
            <div className="flex justify-center  h-72">
              <img
                src={
                 
                    "https://i.pinimg.com/564x/b8/9f/51/b89f51fbde04ae076fc2d6350f60e891.jpg"
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
        <ToastContainer />
      </>
    );
  }
  