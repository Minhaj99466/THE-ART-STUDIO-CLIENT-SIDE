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
   
  export default function CardDefault() {
        const contents=[{
      artistName:"MInhaj",
      Job:"RETRO INVITAIONS",
      Image:"https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80",
      price:434
    },{
      artistName:"aaa",
      Job:"PAINTER",
      Image:"https://i.pinimg.com/564x/8f/f3/4c/8ff34c7cc25f1425ec6b8d3c1ce673ed.jpg",
      price:434
    },{
      artistName:"MIncccchaj",
      Job:"WALL ART",
      Image:"https://i.pinimg.com/564x/cd/ed/d7/cdedd7bc7ae6e91fb04121e37c307a2b.jpg",
      price:434
    }]

    return (
      <div className="grid sm:grid-cols-2 md:grid-cols-3 mb-5  bg-[#ffffff]">
      {contents.map((data,index)=>(
          
          
      <Card key={index} className="sm:m-6 w-96 ">
        <CardHeader color="blue-gray" className="relative h-56">
          <img
          className="w-screen h-fit"
            src={data.Image}
            
            alt="card-image"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {data.Job}
          </Typography>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {data.artistName}
          </Typography>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            BY {data.artistName}
          </Typography>
         
        </CardBody>
        
      </Card>

    
      ))}
        </div>
    )
  }