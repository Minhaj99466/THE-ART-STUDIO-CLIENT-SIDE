import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Avatar,
} from "@material-tailwind/react";

import Posts from "./SinGleProfilePost";
import { useNavigate, useParams } from "react-router-dom";

import { CheckDate, getArtistDetails } from "../../../api/userApi";
import { useEffect, useState } from "react";
import DialogWithForm from "./DateDialog";
import { DatePicker, Space } from "antd";
import moment from "moment";
const { RangePicker } = DatePicker;

export default function Signup() {
  const navigate = useNavigate();
  const [fromDate, setFromDate] = useState();
  const [ToDate, setToDate] = useState();
  const { id } = useParams();
  const [data, setData] = useState();
  const [msg, setMsg] = useState();
  
  

  function filterByDate(dates) {
    setFromDate(dates[0].format("DD-MM-YYYY"));
    setToDate(dates[1].format("DD-MM-YYYY"));
  }


  const handleBook=async()=>{
    try {
      const res=await CheckDate(fromDate,ToDate,id)
      if(res.data.booked){
        navigate(`/booknow/${id}/${fromDate}/${ToDate}`)
      }else{
        setMsg("Date Already taken")
      }
    } catch (error) {
        console.log(error);      
    }
  }
   
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getArtistDetails({ id });
        if (res) {
          setData(res);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 ">
        <div className=" mt-8">
          <Posts data={data} />
        </div>

        <div className=" h-screen  grid  justify-center  ">
          <div className=" grid justify-center items-center mb-12">
            {data && data.data ? (
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
                    src={data.data.displaypicture}
                  />
                  <Typography variant="h4" className="mb-4 text-gray-700">
                    {data.data.name}
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
                    {data.data.description}
                  </Typography>
                  <div className="grid justify-start">
                    <Typography
                      variant="h6"
                      className="mb-4 text-gray-700 text-start"
                    >
                      Category:{data.data.category}
                    </Typography>
                    <Typography
                      variant="h6"
                      className="mb-4 text-gray-700 text-start"
                    >
                      Year Of Experience:{data.data.experience}years
                    </Typography>
                    <Typography
                      variant="h6"
                      className="mb-4 text-gray-700 text-start"
                    >
                      Place:{data.data.place}
                    </Typography>
                    <Typography
                      variant="h6"
                      className="mb-4 text-gray-700 text-start"
                    >
                      Mobile:{data.data.mobile}
                    </Typography>
                  </div>
                  <Typography variant="h6" className="mb-4 text-gray-700 ">
                    ₹{data.data.fees}/day
                  </Typography>
                  <Typography variant="h6" className="mb-4 text-gray-700 ">
                    <RangePicker onChange={filterByDate}
                     disabledDate={(current) => current && current < moment().startOf('day')} />
                  </Typography>
                  {msg?( <div className="text-deep-orange-900">{msg}</div> ):(null)}
                 
                  {fromDate && ToDate ? (
                    <Button
                      onClick={handleBook
                        
                      }
                    >
                      Book Now
                    </Button>
                  ) : null}
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
