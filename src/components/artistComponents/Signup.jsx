import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
    Input,
  } from "@material-tailwind/react";
  // import {Formik} from 'formik'
  import Img from "../../assets/artistsAssets/artistSign.jpg";
  
  import { ArtistSignup,ArtistSignupWithGoogle } from "../../api/artistApi";
  import { ToastContainer } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";
  import { useFormik } from "formik";
  import { SignupSchema } from "../../yup/validation";
  import { GenerateError, GenerateSuccess } from "../../toast/toast";
  import { useState, useEffect } from "react";
  import { useGoogleLogin } from "@react-oauth/google";
  import { useDispatch } from "react-redux";
  import { setartistdetails } from "../../Redux/artistSlice/artistSlice";
  import axios from "axios";
 
  import { useNavigate } from "react-router-dom";
  
  export default function Signup() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [gUser, setGuser] = useState([]);
    
    const Glogin = useGoogleLogin({
      onSuccess: (codeResponse) => setGuser(codeResponse),
      onError: (error) => console.log("Login Failed:", error),
    });
  
    useEffect(() => {
      if (gUser) {
        axios
          .get(
            `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${gUser.access_token}`,
            {
              headers: {
                Authorization: `Bearer ${gUser.access_token}`,
                Accept: "application/json",
              },
            }
          )
          .then((res) => {
            ArtistSignupWithGoogle(res.data).then((response) => {
              console.log(response,"hhhhhhhh");
              if (response.data.created) {
                const artistDetails = {
                  name: response.data.artistData.name,
                  email: response.data.artistData.email,
                };
                localStorage.setItem("ArtistToken", response.data.token);
                dispatch(
                  setartistdetails({
                    artistInfo: artistDetails,
                  })
                );
                navigate("/artist");
              } else {
                GenerateError(response.data.message);
              }
            });
          })
          .catch((err) => console.log(err));
      }
    },[gUser,navigate,dispatch]);
  
    // const logOut = () => {
    //   googleLogout();
    //   setProfile(null);
    // };
  
    const initialValues = {
      name: "",
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
      validationSchema: SignupSchema,
      onSubmit: async (values) => {
        const response = await ArtistSignup(values);
        console.log(response);
        if (response.data.created) {
          GenerateSuccess(response.data.message);
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
                Sign Up
              </Typography>
              <Typography color="gray" className="mt-1 font-normal">
                Enter your details to register.
              </Typography>
              <form
                onSubmit={handleSubmit}
                className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
              >
                <div className="mb-4 flex flex-col gap-3">
                  <Input
                    variant="static"
                    size="lg"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    label="Name"
                  />
                  {touched.name && errors.name && (
                    <div className="text-red-500 text-xs">{errors.name}</div>
                  )}
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
  
                <Button type="submit" className="mt-6" fullWidth>
                  Register
                </Button>
              </form>
              <Typography color="gray" className="mt-4 text-center font-normal">
              <div className="pb-5">
                <h1>Do you have an account?<button onClick={()=>navigate('/artist/login')} className="text-cyan-600">Signin</button></h1>
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
        <ToastContainer />
      </>
    );
  }
  



