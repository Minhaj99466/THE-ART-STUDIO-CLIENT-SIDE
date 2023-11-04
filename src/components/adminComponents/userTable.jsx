
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  IconButton,
  Input,
} from "@material-tailwind/react";
// import { useEffect } from "react";
import { useQuery,useQueryClient} from "@tanstack/react-query";
import AdminRequest from "../../utils/adminRequest";
import { manageAction } from "../../api/adminApi";
import Dialog from '../Common/AdmincommonComponent/Dialog'
import { InfinitySpin } from  'react-loader-spinner'
import { GenerateError } from "../../toast/toast";
import { useNavigate } from "react-router-dom";
import { GetUsers } from "../../api/adminApi";
import { useEffect, useState } from "react";


const TABLE_HEAD = [
  "No",
  "Name",
  "Email",
  "Status",
  "Action",
];





export default function Table() {
  const [active, setActive] = useState(1);
  const [search, setSearch] = useState(0);
  const [refetch, setRefetch] = useState(false);
  // const [value, setValue] = useState(1);
  const [data, setData] = useState([]);
// const navigate=useNavigate()
  
//   const { isLoading, error, data } = useQuery({
//     queryKey: ["user"],
//     queryFn: () => GetUsers("/admin/users").then((res) => res.data),
//   });
//   const queryclient = useQueryClient()

//   if (isLoading) return <div  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', }}>
//   <InfinitySpin width={200} color="#4fa94d" />
// </div>


//   if (error) {
//       return <p>somthing went wrong</p>
//     }

const handleSearch = (e) => {
  setSearch(e.target.value);

  if (e.target.value.length == 0) {
    setSearch(0);
  }
};
const next = () => {
  if (active === data.totalPages) return;

  setActive(active + 1);
};

const prev = () => {
  if (active === 1) return;

  setActive(active - 1);
};

const getItemProps = (index) => ({
  variant: active === index ? "filled" : "text",
  color: "gray",
  onClick: () => setActive(index),
});

useEffect(() => {
  const fetchArtists = async () => {
    try {
      console.log("heloo");
      const response = await GetUsers(search, active);
      const res = response.data;
        setData(res);
        setRefetch(false);
    } catch (error) {
      console.error("An error occurred while fetching data:", error.message);
    }
  };
  fetchArtists();

}, [refetch, search, active]);

const handleAction = async (artistId) => {
  const res = await manageAction({ id: artistId });
  if (res) {
    setRefetch(true);
  }
 
};



  return (
    <>
      <Card className="overflow-x-scroll">
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div>
              <Typography variant="h5" color="blue-gray">
                User List
              </Typography>
              <Typography color="gray" className="mt-1 font-normal">
                These are details about the Users
              </Typography>
            </div>
            <div className="flex w-full shrink-0 gap-2 md:w-max">
              <div className="w-full md:w-72">
                <Input
                  label="Search"
                  onChange={handleSearch}
                  icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                />
              </div>
              {/* <Button className="flex items-center gap-3" size="sm">
                <ArrowDownTrayIcon strokeWidth={2} className="h-4 w-4" />{" "}
                Download
              </Button> */}
            </div>
          </div>
        </CardHeader>
        <CardBody className="px-0 ">
          <table className="w-full  table-auto text-left ">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.users && data.users.map(
                (
                  {
                    name,
                    email,
                    is_block,
                    _id,
                  },
                  index
                ) => {
                  const isLast = index === data.users.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50";

                  return (
                    <tr key={name}>
                      <td className={classes}>
                        <div className="flex items-center gap-3">
                          {/* <Avatar
                            src={name}
                            alt={email}
                            size="md"
                            className="border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"
                          /> */}
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-bold"
                          >
                            {index+1}
                          </Typography>
                        </div>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {name}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {email}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <div className="w-max">
                          <Chip
                            size="sm"
                            variant="ghost"
                            value={
                              is_block ===false?
                              "ACTIVE":"BLOCKED"
                            }
                           
                            color={
                              is_block === false
                                ? "green"
                                : "red"
                            }
                          />
                        </div>
                      </td>
                     
                      <td className={classes}>
                          
                      {is_block ===true ? (
                        
                        <Button  onClick={()=>handleAction(_id)} >Unblock</Button>
                       
                      ) : (

                        <Dialog  buttonText="Block" headerText="User Blocking Confirmation" bodyText={`Do You Need To Block ${name} ?`} onConfirm={()=>handleAction(_id)} />
                      )}    
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </CardBody>
        <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
          <Button
            variant="text"
            className="hidden md:flex items-center gap-2  "
            onClick={prev}
            disabled={active === 1}
          >
            <ArrowLeftIcon strokeWidth={4} className="h-4 w-4" /> Previous
          </Button>
          <div className="flex items-center gap-2">
            {data.users &&
              data.totalPages &&
              Array.from({ length: data.totalPages }).map((_, index) => (
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
        </CardFooter>
      </Card>
    </>
  );
}
