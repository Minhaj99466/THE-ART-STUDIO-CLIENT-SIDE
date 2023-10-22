import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
  } from "@material-tailwind/react";
  import { useQuery } from "@tanstack/react-query";
import UserRequest from "../../utils/userRequest";
import { InfinitySpin } from "react-loader-spinner";
   
  export default function ProfileCard() {

    const { isLoading, error, data } = useQuery({
        queryKey: ["artist"],
        queryFn: () =>
        UserRequest.get('/allArtists').then((res) => res.data),
      });
      if (isLoading) return <InfinitySpin width="200" color="#4fa94d" />;
    
      if (error) return "An error has occurred: " + error.message;



    return (
        <>
        <div className="grid grid-cols-4 ">
        {data.Artists?(
            data.Artists.map((item)=>(
      <Card className="w-64 mt-10" key={item._id} >
        <CardHeader floated={false} >
          <img className="bg-cover" src={item.displaypicture} alt="profile-picture" />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h4" color="blue-gray" className="mb-2">
            {item.name}
          </Typography>
          <Typography color="blue-gray" className="font-medium" textGradient>
            {item.category}
          </Typography>
        </CardBody>
        {/* <CardFooter className="flex justify-center gap-7 pt-2">
          <Tooltip content="Like">
            <Typography
              as="a"
              href="#facebook"
              variant="lead"
              color="blue"
              textGradient
            >
              <i className="fab fa-facebook" />
            </Typography>
          </Tooltip>
          <Tooltip content="Follow">
            <Typography
              as="a"
              href="#twitter"
              variant="lead"
              color="light-blue"
              textGradient
            >
              <i className="fab fa-twitter" />
            </Typography>
          </Tooltip>
          <Tooltip content="Follow">
            <Typography
              as="a"
              href="#instagram"
              variant="lead"
              color="purple"
              textGradient
            >
              <i className="fab fa-instagram" />
            </Typography>
          </Tooltip>
        </CardFooter> */}
      </Card>
      ))):(
        <h1>hello</h1>
        )}
   
      </div>
      </>
    );
  }