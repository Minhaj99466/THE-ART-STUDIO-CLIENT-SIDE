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
import App from "./SIngleProfileComponents.jsx/SinGleProfilePost";
import Helo from "./SIngleProfileComponents.jsx/SignleDown";


export default function Signup() {
  return (
    <>
      <div className="grid grid-cols-2 ">
        <div className="grid grid-cols-1 justify-between ">
          <div className=" h-96 mt-7">
            
            <App/>
            <div className="h-fit mt-10  rounded-lg md:hidden">
            <Helo/>
            </div>
          
          </div>
        </div>

        <div className=" h-screen grid  justify-center  ">
          <div className="  grid justify-center items-center ">
            <Card
              shadow={false}
              className="relative grid h-[40rem] w-full max-w-[28rem] justify-center overflow-hidden text-center border shadow-xl"
            >
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="absolute inset-0 m-0 h-full w-full rounded-none bg-[#fff] bg-cover bg-center"
              >
                <div className="to-bg-black-10  inset-0 h-full w-full bg-gradient-to-r from-gray-50 to-orange-50 " />
              </CardHeader>
              <CardBody className="relative py-14  md:px-12">
                <Avatar
                  size="xxl"
                  variant="rounded"
                  alt="tania andrew"
                  className="border-2 border-white"
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                />
                <Typography variant="h4" className="mb-4 text-gray-700">
                  Bonito Sarcastic
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
                  I am an artist india is an online and physical art gallery
                  based in india mumbai.
                </Typography>
                <div className="grid justify-start">
                  <Typography
                    variant="h6"
                    className="mb-4 text-gray-700 text-start"
                  >
                    Category:WALL ART
                  </Typography>
                  <Typography
                    variant="h6"
                    className="mb-4 text-gray-700 text-start"
                  >
                    Year Of Experience:12 years
                  </Typography>
                  <Typography
                    variant="h6"
                    className="mb-4 text-gray-700 text-start"
                  >
                    Place:VADAKARA
                  </Typography>
                  <Typography
                    variant="h6"
                    className="mb-4 text-gray-700 text-start"
                  >
                    Mobile:9946631792
                  </Typography>
                </div>
                <Typography variant="h6" className="mb-4 text-gray-700 ">
                  $12000/day
                </Typography>
                <Button>Book Now</Button>
              </CardBody>
            </Card>
          </div>
          {/* <div className=" w-96  bg-blue-gray-900"></div> */}
        </div>
      </div>
    </>
  );
}
