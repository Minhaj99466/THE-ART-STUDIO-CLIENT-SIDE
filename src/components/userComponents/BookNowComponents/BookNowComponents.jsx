import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Avatar,
} from "@material-tailwind/react";
import moment from "moment";
import  {GenerateSuccess,GenerateError}  from "../../../toast/toast";
import { json, useParams } from "react-router-dom";
import { BookingSlot } from "../../../api/userApi";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";


function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="h-3 w-3"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12.75l6 6 9-13.5"
      />
    </svg>
  );
}

export default function PricingCard() {
  const param = useParams();
  const id = param.id;
  const fromDate = moment(param.from, "DD-MM-YYYY");
  const toDate = moment(param.to, "DD-MM-YYYY");


  const totalDays = moment.duration(toDate.diff(fromDate)).asDays() + 1;

  async function handleBooking() {
    const bookingDetails = {
      artistId: id,
      fromDate,
      toDate,
      totalDays,
    };
    console.log(bookingDetails);

    try {
      const res = await BookingSlot(bookingDetails);
     GenerateSuccess(res.data.message)

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="grid justify-center   md:flex md:justify-around md:mt-10 ">
        <Card
          shadow={false}
          className="relative grid h-[36rem] w-full max-w-[28rem] justify-center overflow-hidden text-center border shadow-xl md:mb-1"
        >
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="absolute inset-0 m-0 h-full w-full rounded-none bg-[#fff] bg-cover bg-center"
          >
            <div className="to-bg-black-10  inset-0 h-full w-full bg-gradient-to-r from-gray-50 to-orange-50 " />
          </CardHeader>

          <CardBody className="relative  md:px-10">
            <Avatar
              size="xxl"
              variant="rounded"
              alt="tania andrew"
              className="border-2 border-white"
              // src={data.data.displaypicture}
              // src={data.data.displaypicture}
            />
            <Typography variant="h4" className="mb-4 text-gray-700">
              {/* {data.data.name} */}
              {"ghhghjgj"}
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
              {/* {data.data.description} */}
              {"jgvghhvgh"}
            </Typography>
            <div className="grid justify-start">
              <Typography
                variant="h6"
                className="mb-4 text-gray-700 text-start"
              >
                {/* Category:{data.data.category} */}
                Category:{"ghvghvhjvj"}
              </Typography>
              <Typography
                variant="h6"
                className="mb-4 text-gray-700 text-start"
              >
                {/* Year Of Experience:{data.data.experience}years */}
                Year Of Experience:{"1000"}years
              </Typography>
              <Typography
                variant="h6"
                className="mb-4 text-gray-700 text-start"
              >
                {/* Place:{data.data.place} */}
                Place:{"hekkekk"}
              </Typography>
              <Typography
                variant="h6"
                className="mb-4 text-gray-700 text-start"
              >
                {/* Mobile:{data.data.mobile} */}
                Mobile:{"9947746646"}
              </Typography>
            </div>
            <Typography variant="h6" className="mb-4 text-gray-700 ">
              {/* ₹{data.data.fees}/day */}₹{"1000"}/day
            </Typography>
            <Typography variant="h6" className="mb-4 text-gray-700 ">
              {/* <RangePicker onChange={filterByDate} /> */}
            </Typography>
            {/* <Button onClick={()=>navigate('/booknow')} >Book Now</Button> */}
          </CardBody>
        </Card>

        <Card
          color="gray"
          variant="gradient"
          className="w-full max-w-[20rem] p-8 mt-10 md:w-full md:max-w-[20rem] md:p-8 md:mt-0"
        >
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
          >
            <Typography
              variant="small"
              color="white"
              className="font-normal uppercase"
            >
              standard
            </Typography>
            <Typography
              variant="h1"
              color="white"
              className="mt-6 flex justify-center gap-1 text-7xl font-normal"
            >
              <span className="mt-2 text-4xl">₹</span>2000{" "}
              <span className="self-end text-xl">/Day</span>
            </Typography>
          </CardHeader>
          <CardBody className="p-0">
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-4">
                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                  <CheckIcon />
                </span>
                <Typography className="font-normal">
                  NAME : {"MINHAJ"}
                </Typography>
              </li>
              <li className="flex items-center gap-4">
                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                  <CheckIcon />
                </span>
                <Typography className="font-normal">
                  TO DATE : {fromDate.format("DD-MM-YYYY").toString()}
                </Typography>
              </li>
              <li className="flex items-center gap-4">
                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                  <CheckIcon />
                </span>
                <Typography className="font-normal">
                  FROM DATE : {toDate.format("DD-MM-YYYY").toString()}
                </Typography>
              </li>
              <li className="flex items-center gap-4">
                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                  <CheckIcon />
                </span>
                <Typography className="font-normal">
                  TOTAL DAY={totalDays.toString()} DAY
                </Typography>
              </li>
              <li className="flex items-center gap-4">
                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                  <CheckIcon />
                </span>
                <Typography className="font-normal">
                  WORK TIME : 9AM TO 5PM
                </Typography>
              </li>
            </ul>
          </CardBody>
          <CardFooter className="mt-12 p-0">
          
            <Button
              size="lg"
              color="white"
              className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
              ripple={false}
              fullWidth={true}
              onClick={handleBooking}
            >
              Pay Now
            </Button>
          </CardFooter>
        </Card>
      </div>
      <ToastContainer />
    </>
  );
}
