import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
  Button,
  Input,
  IconButton,
} from "@material-tailwind/react";

import {
  ArrowLeftIcon,
  ArrowRightIcon,
  // UserCircleIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Tab, Tabs } from "@mui/material";
import { getCategorisedArtists } from "../../../api/userApi";
import { Loading } from "../../Common/ArtistcommonComponents/Loading/Loading";

export default function ProfileCard() {
  const [active, setActive] = useState(1);
  console.log(active);

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
  // const [value, setValue] = useState(0);
  const [search, setSearch] = useState(0);
  const [data, setData] = useState([]);
  const [activeTab, setActiveTab] = useState(0);
  const [loading, setLoading] = useState(false);  

  useEffect(() => {
    const fetchArtists = async () => {
      try {
        setLoading(true)
        const response = await getCategorisedArtists(
          category[activeTab],
          search,
          active
        );
        const res = response.data;
        setData(res);
      } catch (error) {
        console.error("An error occurred while fetching data:", error.message);
      }
      setLoading(false)
    };
    fetchArtists();
  }, [activeTab, search, active]);


  const handleSearch = (e) => {
    setSearch(e.target.value);
    if (e.target.value.length == 0) {
      setSearch(0);
    }
  };

  const handleTabClick = (index) => {
    setActiveTab(index);
    // Your additional logic or actions on tab click can go here
  };

  const getItemProps = (index) => ({
    variant: active === index ? "filled" : "text",
    color: "gray",
    onClick: () => setActive(index),
  });

  const next = () => {
    if (active === data.totalPages) return;

    setActive(active + 1);
  };

  const prev = () => {
    if (active === 1) return;

    setActive(active - 1);
  };
console.log(search);
  return (
    <>
      <div className="grid justify-center items-center">
      <div className=" w-10 my-5 md:w-full ">
        <Input
          onChange={handleSearch}
          className="text-[#956262] font-sans"
          label="Search"
          containerProps={{
            className: "mb-4",
          }}
        />
      </div>
      <div className="flex mx-5 bg-[#caa487] rounded-xl  overflow-x-auto md:mx-0">
        { category.map((item, index) => (
          <button
            key={index}
            onClick={() => handleTabClick(index,item)}
            className={` px-4 py-2 ${
              index === activeTab
                ? 'bg-brown-100 text-gray-800'
                : 'bg-[#caa487] text-white'
            }`}
          >
            {item}
          </button>
        ))}
      </div>
    </div>

    {loading ?<Loading/>:null}
      <div className="grid  grid-cols-1 ml-10  md:grid-cols-3  gap-12 md:ml-24">
        {!loading && data && data.ArtistData? (
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
                <Typography color="gray" className="font-medium" textGradient>
                  ₹{item.fees}/Day
                </Typography>
              </CardBody>

              <CardFooter className="flex justify-end gap-7 pt-2">
                <HeartIcon className="w-5 h-5 text-red-900" />
              </CardFooter>
            </Card>
          ))
        ) : (
          <h1>THERE IS NO CONFIRMED ARTIST</h1>
        )}
      </div>

      <div className="grid justify-center  mt-20 md:w-full md:flex md:justify-center md:items-center ">
        <Button
          variant="text"
          className="hidden md:flex items-center gap-2  "
          onClick={prev}
          disabled={active === 1}
        >
          <ArrowLeftIcon strokeWidth={4} className="h-4 w-4" /> Previous
        </Button>
        <div className="flex items-center gap-2">
        {data.ArtistData && Array.from({ length: data.totalPages }).map((_, index) => (
    <IconButton key={index + 1} {...getItemProps(index + 1)}>
      {index + 1}
    </IconButton>
  ))}
        </div>
        <Button
          variant="text"
          className="hidden md:flex items-center gap-2"
          onClick={next}
          disabled={active === data.totalPages}
        >
          Next
          <ArrowRightIcon strokeWidth={4} className="h-4 w-4" />
        </Button>
      </div>
    </>
  );
}
