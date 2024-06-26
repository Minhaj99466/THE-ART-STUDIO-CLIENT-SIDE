import {
  Card,
  CardHeader,
  CardBody,
  Typography,       
  Button,
  Input,
} from "@material-tailwind/react";
// import {Formik} from 'formik'
import Img from "../../assets/userAssets/download (3).jpg";

import { UserLogin } from "../../api/userApi";

import "react-toastify/dist/ReactToastify.css";
import { useFormik } from "formik";
import { LoginSchema } from "../../yup/validation";
import { GenerateError, GenerateSuccess } from "../../toast/toast";
import { useState, useEffect } from "react";
import { useGoogleLogin } from "@react-oauth/google";

import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setuserdetails } from "../../Redux/userSlice/userSlice";
import { ToastContainer } from "react-toastify";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [guser, setGuser] = useState([]);

  const Glogin = useGoogleLogin({
    onSuccess: (codeResponse) => setGuser(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });

  useEffect(() => {
    if (guser) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${guser.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${guser.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          UserLogin({ email: res.data.email, password: res.data.id }).then(
            (response) => {
              if (response.data.loginSuccess) {
                const userDetails = {
                  name: response.data.user.name,
                  email: response.data.user.email,
                  id: response.data.user._id,
                };
                dispatch(
                  setuserdetails({
                    userInfo: userDetails,
                  })
                );
                localStorage.setItem("UserToken", response.data.token);
                navigate("/");
              } else {
                GenerateError(response.data.message);
              }
            }
          );
        })
        .catch((err) => console.log(err));
    }
  }, [guser, dispatch, navigate]);

  // const logOut = () => {
  //   googleLogout();
  //   setProfile(null);
  // };

  const initialValues = {
    email: "",
    password: "",
  };
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleSubmit,
    handleChange,
    // setFieldValue,
    // setValues,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: LoginSchema,
    onSubmit: async (values) => {
      const response = await UserLogin(values);
      if (response.data.loginSuccess) {
        GenerateSuccess(response.data.message);

        const userDetails = {
          email: response.data.user.email,
          name: response.data.user.name,
          id:response.data.user._id
        };
        dispatch(
          setuserdetails({
            userInfo: userDetails,
          })
        );
        localStorage.setItem("UserToken", response.data.token);
        navigate("/");
      } else {
        GenerateError(response.data.message);
      }
    },
  });

  return (
    <>
      {" "}
      <div className="flex justify-center items-center h-screen bg-[#F6E2D3]">
        <Card className="w-full max-w-[48rem] flex-row">
          <CardHeader
            shadow={false}
            floated={false}
            className="m-0 w-2/5 shrink-0 rounded-r-none hidden sm:block"
          >
            <img
              src={Img}
              alt="card-image"
              className="h-full w-full object-cover "
            />
          </CardHeader>
          <CardBody>
            <Typography variant="h4" color="blue-gray">
              Sign in
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              Enter your details to Login
            </Typography>
            <form
              onSubmit={handleSubmit}
              className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
            >
              <div className="mb-4 flex flex-col gap-3">
                <Input
                  variant="static"
                  size="lg"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  label="Email"
                />
                {touched.email && errors.email && (
                  <div className="text-red-500 text-xs ">{errors.email}</div>
                )}
                <Input
                  variant="static"
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  size="lg"
                  label="Password"
                />
                {touched.password && errors.password && (
                  <div className="text-red-500 text-xs ">{errors.password}</div>
                )}
              </div>
              <div className="pl-60">
                
                  <button 
                    onClick={() => navigate("/forget")}
                    className="text-gray-500"
                  >
                    <span>Forgot Password ?</span>
                  </button>
               
              </div>

              <Button type="submit" className="mt-6" fullWidth>
               Sign in
              </Button>
            </form>
            <Typography color="gray" className="mt-4 text-center font-normal">
              <div className="pb-5">
                <h1>
                  Do you have an account?
                  <button
                    onClick={() => navigate("/signup")}
                    className="text-cyan-600"
                  >
                    Signup
                  </button>
                </h1>
              </div>
              
              <div className="pb-5">
                <h1>
                  <hr />
                  or
                </h1>
              </div>

              {/* Google login button */}
              <div className="flex justify-center items-center">
                <Button
                  onClick={() => Glogin()}
                  variant="text"
                  color="blue-gray"
                  className="flex items-center gap-3"
                >
                  <img
                    src="https://freesvg.org/img/1534129544.png"
                    alt="metamask"
                    className="h-6 w-6"
                  />
                  Continue with Google
                </Button>
              </div>
            </Typography>
          </CardBody>
        </Card>
      </div>
      <ToastContainer/>

    </>
  );
}
