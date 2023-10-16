
import {
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
  import { useQuery,useQueryClient} from "@tanstack/react-query";
  import AdminRequest from "../../utils/adminRequest";
  import { manageArtistAction } from "../../api/adminApi";
  import Dialog from '../../components/adminComponents/commonComponent/Dialog'
  
  const TABS = [
    {
      label: "All",
      value: "all",
    },
    {
      label: "Monitored",
      value: "monitored",
    },
    {
      label: "Unmonitored",
      value: "unmonitored",
    },
  ];

  const TABLE_HEAD = [
    "No",
    "Name",
    "Email",
    "Status",
    "Action",
  ];
  
  
  
  export default function Table() {
  
    
    const { isLoading, error, data } = useQuery({
      queryKey: ["artist"],
      queryFn: () => AdminRequest.get("/admin/artist").then((res) => res.data),
    });
    const queryclient = useQueryClient()
  
    if (isLoading) return "Loading...";
  
    if (error) return "An error has occurred: " + error.message;
  
   const handleAction=async(artistId)=>{ 
          await manageArtistAction({id:artistId})
            queryclient.invalidateQueries("artist")
    }
    
    return (
      <>
        <Card className="h-full w-full ">
          <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className="mb-8 flex items-center justify-between gap-8">
          <div>
            <Typography variant="h5" color="blue-gray">
              Members list
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              See information about all members
            </Typography>
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
            <Button variant="outlined" size="sm">
              view all
            </Button>
            <Button className="flex items-center gap-3" size="sm">
              <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Add member
            </Button>
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
                {data.artist.map(
                  (
                    {
                      name,
                      email,
                      is_block,
                      _id,
                    },
                    index
                  ) => {
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
            <Button variant="outlined" size="sm">
              Previous
            </Button>
            <div className="flex items-center gap-2">
              <IconButton variant="outlined" size="sm">
                1
              </IconButton>
              <IconButton variant="text" size="sm">
                2
              </IconButton>
              <IconButton variant="text" size="sm">
                3
              </IconButton>
              <IconButton variant="text" size="sm">
                ...
              </IconButton>
              <IconButton variant="text" size="sm">
                8
              </IconButton>
              <IconButton variant="text" size="sm">
                9
              </IconButton>
              <IconButton variant="text" size="sm">
                10
              </IconButton>
            </div>
            <Button variant="outlined" size="sm">
              Next
            </Button>
          </CardFooter>
        </Card>
      </>
    );
  }
  