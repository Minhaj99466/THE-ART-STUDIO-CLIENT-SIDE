import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
import { useSelector, useDispatch } from "react-redux";

export default function ProfileCard() {
  const userInfo = useSelector((state) => state.user.userInfo);
  return (
	<div className="flex justify-center">
    <Card className="w-96 ">
      <CardHeader floated={false} className="flex justify-center bg-cover">
        <img src="https://i.pinimg.com/236x/5f/40/6a/5f406ab25e8942cbe0da6485afd26b71.jpg" alt="profile-picture" />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h4" color="blue-gray" className="mb-2">
          {userInfo.name.toUpperCase()}
        </Typography>
        <Typography color="blue-gray" className="font-medium" textGradient>
          {userInfo.email}
        </Typography>
        <Typography color="blue-gray" className="font-medium" textGradient>
          wallet: ₹ 1121
        </Typography>
      </CardBody>
    
    </Card>
	</div>
  );
}
