import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
    Input,
  } from "@material-tailwind/react";
  // import {Formik} from 'formik'
  import Img from "../../assets/adminAssets/adminLogin.jpg";
  
  import { Login } from "../../api/adminApi";
  import { ToastContainer } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";
  import { useFormik } from "formik";
  import { LoginSchema } from "../../yup/validation";
  import { GenerateError, GenerateSuccess } from "../../toast/toast";

  import { useDispatch } from "react-redux";
  import { useNavigate } from "react-router-dom";
import { setadmindetails } from "../../Redux/adminSlice/adminSlice";
  
  export default function AdminLogin() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
  
  
  
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
        const response = await Login(values);
        if (response.data.loginSuccess){
          GenerateSuccess(response.data.message);
  
          const adminDetails = {
            email: response.data.admin.email,
            password: response.data.admin.password,
          };
          dispatch(
            setadmindetails({
              adminInfo: adminDetails,
            })
          );
          localStorage.setItem("AdminToken", response.data.token);
          navigate("/admin/home");
        } else {
          GenerateError(response.data.message);
        }
      },
    });
  
    return (
      <>
        {" "}
        <div className="flex justify-center items-center h-screen bg-[#F6E2D3]">
          <Card className="w-screen max-w-[48rem] flex-row">
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
                Admin Login
              </Typography>
              <Typography color="gray" className="mt-1 font-normal">
                Enter your details to Log in.
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
  
                <Button type="submit" className="mt-6" fullWidth>
                  Register
                </Button>
              </form>
              
            </CardBody>
          </Card>
        </div>
        <ToastContainer />
      </>
    );
  }
  