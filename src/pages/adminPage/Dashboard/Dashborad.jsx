import Chart from "react-apexcharts";
import {
  UserGroupIcon,
  WalletIcon,
  DocumentIcon,
} from "@heroicons/react/24/outline";
import { Loading } from "../../../components/Common/ArtistcommonComponents/Loading/Loading";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import { DashBoard } from "../../../api/adminApi";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { GenerateError } from "../../../toast/toast";

function Dashboard() {
  const { isLoading, error, data } = useQuery({
    queryKey: ["dashboardAdmin"],
    queryFn: () => DashBoard().then((res) => res.data),
  });

  const TABLE_HEAD = ["Name", "Bookings"];

  // const series= [data && data.BookingCount, data && data.canceledCount, data && data.PendingCount]
  console.log(data,"datsssssssssssssssssssssss");
  
  const [chartState, setChartState] = useState({
    options: {
      chart: {
        width: 380,
        type: 'pie',
      },
      colors: ['#669DB5', '#ff0000', '#ffdead'],
      fill: {
        type: 'image',
        opacity: 0.90,
        image: {
          src: [
            'https://i.pinimg.com/564x/72/68/27/726827667e0f091aba61ff2988b42c63.jpg',
            'https://i.pinimg.com/564x/75/4a/b0/754ab0fe8711828552525f9d27cedb28.jpg',
            'https://i.pinimg.com/564x/af/82/6d/af826d179b5cc128ad5e235d9b1b8f48.jpg',
          ],
          width: 25,
          imagedHeight: 25,
        },
      },
      stroke: {
        width: 2,
      },
      dataLabels: {
        enabled: false,
        style: {
          colors: ['#111'],
        },
        background: {
          enabled: true,
          foreColor: '#fff',
          borderWidth: 0,
        },
      },
      labels: ['BookingCount', 'canceledCount ', 'PendingCount'], // Add names for each series
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    },
  });

 


  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    GenerateError(error.response.data.data.message)
  }

  return (
  
      <div className="conatainer mx-auto">
        <Card className="shadow-none   md:m-3 bg-transparent ">
          <div className="grid-cols-1  grid  md:grid-cols-3">
            <div >
              <Card className="h-36 w-80 bg-[#5D7582] rounded-md p-2 m-2 shadow-lg hover:bg-[#d8e1d3]">
                <div className="flex">
                  <DocumentIcon className="h-7 w-7 me-2 text-white" />
                  <div className="flex flex-col">
                    <Typography variant="h4" className="text-white">
                      BOOKINGS
                    </Typography>
                    <div className="flex items-baseline">
                      <Typography variant="h1" className="text-white my-3 me-3">
                        {data ? data.TotalBookingCount : 0}{" "}
                      </Typography>
                      <Typography className="text-gray-800 my-3">
                        Bookings{" "}
                      </Typography>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
            <div >
              <Card className="h-36 w-80 bg-[#5D7582] rounded-md p-2 m-2 shadow-lg hover:bg-[#d8e1d3]">
                <div className="flex">
                  <UserGroupIcon className="w-7 h-8 me-2 text-white" />
                  <div className="flex flex-col">
                    <Typography variant="h4" className="text-white">
                      USERS
                    </Typography>
                    <div className="flex items-baseline">
                      <Typography variant="h1" className="text-white my-3 me-3">
                        {data ? data.totalUsers : 0}{" "}
                      </Typography>
                      <Typography className="text-gray-800 my-3">
                        Users
                      </Typography>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
            <div >
              <Card className="h-36 w-80 bg-[#5D7582] rounded-md p-2 m-2 shadow-lg hover:bg-[#d8e1d3]">
                <div className="flex">
                  <WalletIcon className="h-7 w-7 me-2 text-white" />
                  <div className="flex flex-col">
                    <Typography variant="h4" className="text-white">
                      TOTAL ARTISTS
                    </Typography>
                    <div className="flex items-baseline">
                      <Typography variant="h1" className="text-white my-3 me-3">
                      {data ? data.totalArtists: 0}
                      </Typography>
                      <Typography className="text-gray-800 my-3">
                        Artists
                      </Typography>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </Card>
        <div className="m-5">
                <Card className="h-full w-full rounded-sm bg-[#5D7582]">
                    <Typography variant="h4" className="my-3 mx-3 text-white font-sans">BOOKINGS SUMMARY</Typography>
                    <table className="w-full min-w-max table-auto text-left">
                        <thead>
                            <tr>
                                {TABLE_HEAD.map((head) => (
                                    <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 text-center p-4">
                                        <Typography
                                            variant="h6"
                                            color="blue-gray"
                                            className=" leading-none opacity-70"
                                        >
                                            {head}
                                        </Typography>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="">
                            {data ? data.artistBookings.map(({_id, bookingCount,artistName }, index) => {
                                const isLast = index === data.artistBookings.length - 1;
                                const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
                                return (
                                    <tr key={_id}>
                                        <td className={`${classes} bg-blue-gray-50/50 text-center `} >
                                            <Typography variant="paragraph" color="blue-gray" className="font-medium">
                                                {artistName}
                                            </Typography>
                                        </td>
                                        <td className={`${classes} bg-blue-gray-50/50 text-center `}>
                                            <Typography variant="paragraph" color="blue-gray" className="font-normal">
                                                {bookingCount}
                                            </Typography>
                                        </td>
                                       

                                    </tr>
                                );
                            }) : ""}
                        </tbody>
                        
                    </table>
                </Card>
            </div>

      </div>

  );
}

export default Dashboard;
