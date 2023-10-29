import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
    Avatar,
  } from "@material-tailwind/react";
  
  

  import { useNavigate, useParams } from "react-router-dom";
  
  
//   import { getArtistDetails } from "../../../api/userApi";
//   import { useEffect, useState } from "react";
 
  import { DatePicker, Space } from 'antd';
  import moment from 'moment'
  const { RangePicker } = DatePicker;
  
  export default function ArtistCard() {
    const navigate=useNavigate()
    // const [fromDate,setFromDate]=useState()
    // const [ToDate,setToDate]=useState()
    // const { id } = useParams();
    // const [data,setData]=useState()
   
  
  
    // function filterByDate(dates){
    //   setFromDate(moment(dates[0]).format('DD-MM-YYYY'))
    //   setToDate(moment(dates[0]).format('DD-MM-YYYY'))
      
    // }
  
    // useEffect(() => {
    //   const fetchData = async () => {
    //     try {
    //       const res = await getArtistDetails({id});
    //       if (res) {
    //         setData(res);
    //       }
    //     } catch (error) {
    //       console.error('Error fetching data:', error);
    //     }
    //   };
    //   fetchData();
    // }, [id]);
  
  
  
    return (
      <>
     
   
              
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
              
                    <CardBody  className="relative  md:px-10">
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
                        {/* ₹{data.data.fees}/day */}
                        ₹{"1000"}/day
                      </Typography>
                      <Typography variant="h6" className="mb-4 text-gray-700 ">
                      {/* <RangePicker onChange={filterByDate} /> */}
                      </Typography>
                      <Button onClick={()=>navigate('/booknow')} >Book Now</Button>
                    
             
            
                  
                    </CardBody>
                  
                </Card>
             
           
       
      </>
    );
  }
  