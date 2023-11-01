import { Alert, Spinner, Typography, Button } from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
// import adminRequest from "../../utils/adminRequest";
import { useNavigate } from "react-router-dom";
import { GenerateError } from "../../toast/toast";
import { ApproveBooking, DateVerify } from "../../api/artistApi";
import { useEffect, useState } from "react";

function IconOutlined() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="blue"
      className="h-6 w-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
      />
    </svg>
  );
}

export default function Notifications() {
  const navigate = useNavigate();
  const [data, setData] = useState();
  const [fetch, setRefetch] = useState(false);

  useEffect(() => {
    const fetchPositions = async () => {
      const response = await DateVerify();
      setData(response.data);
    };
    fetchPositions();
  }, [fetch]);

  async function handleApprove(Id, status) {
    try {
      const res = await ApproveBooking({ Id, status });
      if (res.data.change) {
        setRefetch(true);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      {data &&
        data.artist[0].bookingsPending.map(
          ({ fromDate, toDate, totalDays, _id, userId }) => (
            <div className="flex w-full flex-col gap-2 p-3 " key={_id}>
              <Alert
                icon={<IconOutlined />}
                className="bg-[#c5d3c8] "
                action={
                  <>
                    <Button
                      variant="text"
                      color="red"
                      size="lg"
                      className="!absolute top-6 right-1"
                      onClick={() => handleApprove(_id, "Rejected")}
                    >
                      Reject
                    </Button>
                    <Button
                      variant="text"
                      color="green"
                      size="lg"
                      className="!absolute top-6 right-20"
                      onClick={() => handleApprove(_id, "Approved")}
                    >
                      Approve
                    </Button>
                  </>
                }
              >
                <Typography className="font-medium text-blue-gray-900">
                  Date Verification request.
                </Typography>

                <ul className="mt-2 ml-2 list-inside list-disc text-blue-gray-600">
                  <li>
                    {" "}
                    From {fromDate} to {toDate}{" "}
                  </li>
                  <li> {totalDays} days </li>
                  <li>Request From {userId.name} </li>
                </ul>
              </Alert>
            </div>
          )
        )}
    </>
  );
}
