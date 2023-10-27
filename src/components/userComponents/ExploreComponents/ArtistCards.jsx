import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
  Button,
} from "@material-tailwind/react";

import { useQuery, useQueryClient } from "@tanstack/react-query";
import UserRequest from "../../../utils/userRequest";
import { InfinitySpin } from "react-loader-spinner";
import {
  // UserCircleIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Tab, Tabs } from "@mui/material";
import { getCategorisedArtists } from "../../../api/userApi";


export default function ProfileCard() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const category = [
    "All",
    "Painters",
    "Tattooists",
    "Graphic designers",
    "Textile artists",
    "Illustrators",
    "Cinematographers",
    "Photographers",
    "Sculptors",
    "Craft artists",
  ];
  const [value, setValue] =useState(0);
  const [data, setData] =useState([]);


  useEffect(() => {
    const fetchArtists = async () => {
      try {
        const response = await getCategorisedArtists(category[value]);
        const res = response.data;
        setData(res)
        console.log(res);
      } catch (error) {
        console.error("An error occurred while fetching data:", error.message);
      }
    };
    fetchArtists();
  }, [value]);
  

  // const { isLoading, error, data, refetch   } = useQuery({
  //   queryKey: ["artistCategory"],
  //   queryFn: () => getCategorisedArtists(category[value]).then((res) => res.data),
  // });
  // if (isLoading) return <InfinitySpin width="200" color="#4fa94d" />;

  // if (error) return "An error has occurred: " + error.message;

  // console.log(data);

  const handleChange = (event, item) => {
    setValue(item);
    queryClient.invalidateQueries(['artistCategory'])
  };

  return (
    <>


      <div className="grid justify-center items-center ">
        <Tabs
          className=" bg-[#caa487] rounded-2xl "
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
    
        >
          {category.map((item) => (
            <Tab  key={item} label={item} />
          ))}
        </Tabs>
      </div>

      <div className="grid grid-cols-1  md:grid-cols-3 gap-12 ">
        {data.ArtistData ? (
          data.ArtistData.map((item) => (
            <Card
              className="w-72 grid justify-center mt-10 md:grid md:justify-center bg-[#e8eddf]"
              key={item._id}
              onClick={() => navigate(`/singleView/${item._id}`)}
            >
              <CardHeader floated={false}>
                <img
                  className="w-screen md:w-48 h-44 "
                  src={item.displaypicture}
                  alt="profile-picture"
                />
              </CardHeader>
              <CardBody className="text-start ">
                <Typography variant="h4" color="blue-gray" className="mb-2">
                  {item.name}
                </Typography>

                <Typography
                  color="blue-gray"
                  className="font-medium"
                  textGradient
                >
                  {item.category}
                </Typography>
                <Typography
                  color="gray"
                  className="font-medium"
                  textGradient
                >
                  ₹{item.fees}/Day
                </Typography>
              </CardBody>

              <CardFooter className="flex justify-end gap-7 pt-2">
                <HeartIcon className="w-5 h-5 text-red-900" />
              </CardFooter>
            </Card>
          ))
        ) : (
          <h1>hello</h1>
        )}
      </div>
    </>
  );
}
