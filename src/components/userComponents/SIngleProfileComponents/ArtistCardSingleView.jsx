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

import { InfinitySpin } from "react-loader-spinner";
import {
  // UserCircleIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import { getSuggestion } from "../../../api/userApi";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Loading } from "../../Common/ArtistcommonComponents/Loading/Loading";
// import { Loading } from "../../Common/ArtistcommonComponents/Loading/Loading";


export default function ProfileCard() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const res = await getSuggestion({ id });
        if (res) {
          setData(res.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      setLoading(false)
    };
    fetchData();
  }, [id]);

  const handleNavigate = async (item) => {
    navigate(`/singleView/${item}`);
  };

  return (
    <>
        {loading?<Loading/>:null}
      <div className="grid  gap-12 grid-cols-1 md:grid-cols-3  ">
        {data ? (
          data.map((item) => (
            <Card
              className=" w-72  mt-10 md:grid justify-center bg-[#e8eddf]"
              key={item._id}
              onClick={() => handleNavigate(item._id)}
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
              </CardBody>

              <CardFooter className="flex justify-end gap-7 pt-2">
                <HeartIcon className="w-5 h-5 text-red-900" />
              </CardFooter>
            </Card>
          ))
        ) : (
          null
        )}
      </div>
    </>
  );
}
