import {
  Card,
//   CardHeader,
  CardBody,
  Typography,
  Button,
//   Input,
} from "@material-tailwind/react";
// import {Formik} from 'formik'
// import Img from "../../assets/artistsAssets/artistSign.jpg";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { useFormik } from "formik";
// import { SignupSchema } from "../../yup/validation";
// import { GenerateError, GenerateSuccess } from "../../toast/toast";

export default function ProfileCard() {
  // const logOut = () => {
  //   googleLogout();
  //   setProfile(null);
  // };

  return (
    <>
      {" "}
      <div className=" grid  bg-[#ccddd6] rounded-xl">
        <div >
          <div className="flex justify-center  h-72">
            <img
              src="https://i.pinimg.com/564x/16/8a/20/168a209a4a487fd73e83c419f3ae3682.jpg"
              alt="card-image"
              className="rounded-full "
            />
          </div>
          <Card className=" grid  ">
            <CardBody className="flex justify-center items-center ">
              <div >
                <Typography className="flex justify-center" variant="h4" color="blue-gray">
                  Bonito Fernandes
                </Typography>
                <Typography  color="gray" className="mt-1 font-normal flex justify-center">
                  Enter your details to register.
                </Typography>
                <div className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                  <div className="mb-4 flex flex-col gap-3">
                   <h1 className="font-bold text-blue-gray-400">Category: <span className="font-medium text-black">Wall Painter</span></h1>
                   <h1 className="font-bold text-blue-gray-400">Experience: <span className="font-medium text-black">Worked As a freelancer For a Year</span></h1>
                   <h1 className="font-bold text-blue-gray-400">Place: <span className="font-medium text-black">Some where in earth</span></h1>
                   
                
                
                  </div>

                  <Button type="submit" className="mt-6" fullWidth>
                    Register
                  </Button>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
