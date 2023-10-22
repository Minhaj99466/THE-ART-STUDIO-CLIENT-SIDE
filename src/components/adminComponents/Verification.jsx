import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Spinner,
    Button,
} from "@material-tailwind/react";

import { useNavigate, useParams } from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import adminRequest from "../../utils/adminRequest";
import { verifyArtist } from "../../api/adminApi";
import CustomDialog from "../Common/AdmincommonComponent/Dialog";
import StandardImageList from "./showPosts";
// import { Reject } from "./Reject";
export const Verification = () => {
    const { id } = useParams();
    const navigate = useNavigate()
    // const queryClient = useQueryClient();
    const { isLoading, error, data } = useQuery({
        queryKey: ['artistVerification'],
        queryFn: () => adminRequest.get(`/getArtist/${id}`).then((res) => res.data),
    });

    const handleVerify = async (docId) => {
        const response = await verifyArtist(docId)
        console.log(response);
        if (response.data.verified) {
            navigate('/admin/notification')
        }

    }
    if (isLoading) {
        return <div className="h-screen flex justify-center items-center"><Spinner color="blue" className="h-10 w-10 " /></div>
    }
    if (error) {
        return <h1>Something went Wrong</h1>
    }
    return (
        <>
        <div className="relative bg-[#ccddd6] rounded-xl p-4">
          <div>
            <div className="flex justify-center  h-72">
              <img
                src={
                  data.data.displaypicture && data.data.is_profile
                    ? data.data.displaypicture
                    : "https://i.pinimg.com/564x/16/8a/20/168a209a4a487fd73e83c419f3ae3682.jpg"
                }
                alt="card-image"
                className="rounded-full w-72"
              />
            </div>
            <Card className=" grid  ">
              <CardBody className="flex justify-center items-center ">
                <div>
                  <Typography
                    className="flex justify-center "
                    variant="h4"
                    color="blue-gray"
                  >
                    {data.data.name.toUpperCase()}
                  </Typography>
  
                  <Typography
                    color="gray"
                    className="mt-1 font-normal flex justify-center"
                  >
                    {data.data.description && data.data.is_profile
                      ? data.data.description
                      : "Enter your details to register."}
                  </Typography>
                  <div className="grid justify-center">
            
                  </div>
                  {data.data.is_profile ? (
                    <div className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                      <div className="mb-4 flex flex-col gap-3">
                        <h1 className="font-bold text-blue-gray-400 ">
                          Category:
                          <span className="font-medium text-black">
                            {data.data.category.toUpperCase()}
                          </span>
                        </h1>
                        <h1 className="font-bold text-blue-gray-400">
                          Experience:{" "}
                          <span className="font-medium text-black">
                            {data.data.experience} years
                          </span>
                        </h1>
                        <h1 className="font-bold text-blue-gray-400">
                          Place:
                          <span className="font-medium text-black">
                            {data.data.place.toUpperCase()}
                          </span>
                        </h1>
                      </div>
                      <StandardImageList data={data}/>
                    </div>
                    
                  ) : (
                    <div className="flex justify-center pt-8">
                        
                    </div>
                  )}
                  <div className="flex justify-center">
                                    <Button variant="filled" className="rounded-lg text-xs hover:bg-green-800 text-white me-4 bg-green-600" onClick={() => handleVerify(data.data._id)}>approve</Button>
                                    <CustomDialog  buttonText={"Reject"} headerText={"Reject Artist"} bodyText={`Are you sure to reject  Artist${data.data.name}` }  />
                                    </div>
                </div>  
                
              </CardBody>
            </Card>
          </div>
        </div>
      </>
    );
}