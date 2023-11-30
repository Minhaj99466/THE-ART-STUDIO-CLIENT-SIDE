// import {
//     Card,
//     CardHeader,
//     CardBody,
//     // CardFooter,
//     Typography,
//     // Button,
//   } from "@material-tailwind/react";

//   export default function EcommerceCard() {

//     const contents=[{
//       artistName:"MInhaj",
//       Job:"developer",
//       Image:"https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80",
//       price:434
//     },{
//       artistName:"aaa",
//       Job:"developer",
//       Image:"https://i.pinimg.com/564x/8f/f3/4c/8ff34c7cc25f1425ec6b8d3c1ce673ed.jpg",
//       price:434
//     },{
//       artistName:"MIncccchaj",
//       Job:"developer",
//       Image:"https://i.pinimg.com/564x/cd/ed/d7/cdedd7bc7ae6e91fb04121e37c307a2b.jpg",
//       price:434
//     }]

//     return (
//       contents.map((data)=>{
//         return(
//         <>
//       <Card className="w-screen">
//         <CardHeader shadow={false} floated={false} className="h-96">
//           <img
//             src= {data.Image}
//             alt="card-image"
//             className="h-full w-full object-cover"
//           />
//         </CardHeader>
//         <CardBody>
//           <div className="mb-2 flex items-center justify-between">
//             <Typography color="blue-gray" className="font-medium">
//               {data.artistName}
//             </Typography>
//             <Typography color="blue-gray" className="font-medium">
//               ₹ {data.price}
//             </Typography>
//           </div>
//           <Typography
//             variant="small"
//             color="gray"
//             className="font-normal opacity-75"
//           >
//            {data.Job}
//           </Typography>
//         </CardBody>
//         {/* <CardFooter className="pt-0">
//           <Button
//             ripple={false}
//             fullWidth={true}
//             className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
//           >
//             Add to Cart
//           </Button>
//         </CardFooter> */}
//       </Card>
//       </>

//       )})
//     )
//   }
import {
  Card,
  CardHeader,
  CardBody,
  // CardFooter,
  Typography,
  // Button,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

export default function CardDefault() {
  const navigate=useNavigate()
  const contents = [
    {
      Image:
       "https://i.pinimg.com/236x/68/82/68/688268778b98ea4c55bdec46bbe3ca42.jpg"
    },
    {
      Image:
        "https://i.pinimg.com/564x/86/81/8f/86818f2dcf2ffe79337ede9bc4abeb75.jpg",
    },
    {
      Image:
        "https://i.pinimg.com/564x/cd/ed/d7/cdedd7bc7ae6e91fb04121e37c307a2b.jpg",
    },
    
  ];

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 mb-5 md:gap-10 md:mb-20    bg-[#ffffff]">
      {contents.map((data, index) => (
        <Card onClick={()=>navigate('/explore')} className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 hover:shadow-2xl " key={index}>
          <CardBody >
            <img  className="w-72 h-72" src={data.Image} alt="card-image" />
          </CardBody>
        </Card>
      ))}
    </div>
  );
}
