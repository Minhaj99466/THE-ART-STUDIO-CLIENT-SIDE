// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { getArtistDetails } from "../../../api/userApi";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { InfinitySpin } from "react-loader-spinner";
import { useEffect, useState } from "react";
import { Loading } from "../../Common/ArtistcommonComponents/Loading/Loading";

export default function App() {
  const { id } = useParams();
  const [data,setData]=useState()
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const res = await getArtistDetails({id});
        if (res) {
          setData(res.data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
      setLoading(false)
    };
    fetchData();
  }, [id]);


  // const { id } = useParams();

  // const { isLoading, error, data } = useQuery({
  //   queryKey: ["artistData2"],
  //   queryFn: () => getArtistDetails({ id }).then((res) => res.data),
  // });

  // if (isLoading) return <InfinitySpin width="200" color="#4fa94d" />;

  // if (error) return "An error has occurred: " + error.message;

  // console.log(data);
  

  return (
    <>
    {loading?<Loading/>:null}
      <Swiper
        pagination={true}
        modules={[Pagination]}
        className="mySwiper rounded-xl h-[36rem] "
      >
       {data?
         data.posts.map((item) => (
          <SwiperSlide key={item}>
            <img className="object-cover h-full w-full" src={item} alt="" />
          </SwiperSlide>
        ))
        : null }
      </Swiper>
    </>
  );
}
