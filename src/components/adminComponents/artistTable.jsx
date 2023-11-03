import {
  ArrowLeftIcon,
  ArrowRightIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { UserPlusIcon } from "@heroicons/react/24/solid";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Tabs,
  TabsHeader,
  Tab,
  IconButton,
} from "@material-tailwind/react";
// import { useEffect } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";

import { GetArtists, manageArtistAction } from "../../api/adminApi";
import Dialog from "../Common/AdmincommonComponent/Dialog";
import { InfinitySpin } from "react-loader-spinner";
import { GenerateError } from "../../toast/toast";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const TABS = [
  {
    label: "All Artist",
    value: "all",
  },
  {
    label: "Blocked",
    value: "monitored",
  },
];

const TABLE_HEAD = ["No", "Name", "Email", "Status", "Action"];

export default function Table() {
  const [active, setActive] = useState(1);
  const [search, setSearch] = useState(0);
  const [refetch, setRefetch] = useState(false);
  // const [value, setValue] = useState(1);
  const [data, setData] = useState([]);
  console.log(refetch);
  // const[artistId,setArtistId]=useState('')

  // const { isLoading, error, data   } = useQuery({
  //   queryKey: ["artist"],
  //   queryFn: () => GetArtists(search,active).then((res) => res.data),
  // });
  // const queryclient = useQueryClient();

  // if (isLoading) return <InfinitySpin width="200" color="#4fa94d" />;

  // if (error) {
  //   return <p>somthing went wrong</p>;
  // }

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
        const response = await GetArtists(search, active);
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
    const res = await manageArtistAction({ id: artistId });
    if (res) {
      setRefetch(true);
    }
   
  };
  
  return (
    <>
      <Card className="h-full w-full ">
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className="mb-8 flex items-center justify-between gap-8">
            <div>
              <Typography variant="h5" color="blue-gray">
                Artist List
              </Typography>
              <Typography color="gray" className="mt-1 font-normal">
                See information about all Artists
              </Typography>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <Tabs value="all" className="w-full md:w-max">
              <TabsHeader>
                {TABS.map(({ label, value }) => (
                  <Tab key={value} value={value}>
                    &nbsp;&nbsp;{label}&nbsp;&nbsp;
                  </Tab>
                ))}
              </TabsHeader>
            </Tabs>
            <div className="w-full md:w-72">
              <Input
                label="Search"
                onChange={handleSearch}
                icon={<MagnifyingGlassIcon className="h-5 w-5" />}
              />
            </div>
          </div>
        </CardHeader>
        <CardBody className="px-0">
          <table className="w-full min-w-max table-auto text-left">
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
              {data.artist &&
                data.artist.map(({ name, email, is_block, _id }, index) => {
                  const isLast = index === data.artist.length - 1;
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
                            {index + 1}
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
                            value={is_block === false ? "ACTIVE" : "BLOCKED"}
                            color={is_block === false ? "green" : "red"}
                          />
                        </div>
                      </td>

                      <td className={classes}>
                        {is_block === true ? (
                          <Button onClick={() => handleAction(_id)}>
                            Unblock
                          </Button>
                        ) : (
                          <Dialog
                            buttonText="Block"
                            headerText="User Blocking Confirmation"
                            bodyText={`Do You Need To Block ${name} ?`}
                            onConfirm={() => handleAction(_id)}
                          />
                        )}
                      </td>
                    </tr>
                  );
                })}
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
            {data.artist &&
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
