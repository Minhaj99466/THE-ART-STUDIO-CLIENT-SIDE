import Chart from "react-apexcharts";
import {
  UserGroupIcon,
  WalletIcon,
  DocumentIcon,
} from "@heroicons/react/24/outline";
import { Loading } from "../../../components/Common/ArtistcommonComponents/Loading/Loading";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import { DashBoard } from "../../../api/artistApi";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

function Dashboard() {
  const { isLoading, error, data } = useQuery({
    queryKey: ["dashboardArtist"],
    queryFn: () => DashBoard().then((res) => res.data),
  });

  const series= [data && data.BookingCount, data && data.canceledCount, data && data.PendingCount]
  
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
            'https://i.pinimg.com/236x/f9/53/fc/f953fc82cb44e27841094543badeb856.jpg',
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
    return <div>dfgdfg</div>;
  }

  return (
  
      <div className="conatainer mx-auto">
        <Card className="shadow-none   md:m-3 bg-transparent ">
          <div className="grid-cols-1  grid  md:grid-cols-3">
            <div >
              <Card className="h-36 w-80 bg-[#ACB5A0] rounded-md p-2 m-2 shadow-lg hover:bg-[#d8e1d3]">
                <div className="flex">
                  <DocumentIcon className="h-7 w-7 me-2 text-white" />
                  <div className="flex flex-col">
                    <Typography variant="h4" className="text-white">
                      BOOKINGS
                    </Typography>
                    <div className="flex items-baseline">
                      <Typography variant="h1" className="text-white my-3 me-3">
                        {data ? data.total : 0}{" "}
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
              <Card className="h-36 w-80 bg-[#ACB5A0] rounded-md p-2 m-2 shadow-lg hover:bg-[#d8e1d3]">
                <div className="flex">
                  <UserGroupIcon className="w-7 h-8 me-2 text-white" />
                  <div className="flex flex-col">
                    <Typography variant="h4" className="text-white">
                      USERS
                    </Typography>
                    <div className="flex items-baseline">
                      <Typography variant="h1" className="text-white my-3 me-3">
                        {data ? data.patientsCount : 0}{" "}
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
              <Card className="h-36 w-80 bg-[#ACB5A0] rounded-md p-2 m-2 shadow-lg hover:bg-[#d8e1d3]">
                <div className="flex">
                  <WalletIcon className="h-7 w-7 me-2 text-white" />
                  <div className="flex flex-col">
                    <Typography variant="h4" className="text-white">
                      TOTAL SALES
                    </Typography>
                    <div className="flex items-baseline">
                      <Typography variant="h1" className="text-white my-3 me-3">
                      {data ? data.totalSales: 0} <span  className="font-serif ">₹</span>
                      </Typography>
                      <Typography className="text-gray-800 my-3">
                        Balance
                      </Typography>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </Card>
        <div >
          <Typography variant="h2" className="py-5"></Typography>
          <div >
            <Card className="mt-6 w-[30rem] md:w-[70rem] mb-9 rounded-md bg-[#ACB5A0]">
              <CardBody>
                <Typography variant="h4" color="white" className="mb-2">
                  APPOINTMENT STATUS
                </Typography>
                <div id="chart">
                  <Chart
                    options={chartState.options}
                    series={series}
                    type="pie"
                    width={380}
                  />
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>

  );
}

export default Dashboard;
