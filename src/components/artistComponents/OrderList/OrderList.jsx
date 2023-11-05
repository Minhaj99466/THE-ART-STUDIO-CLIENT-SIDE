import React, { useState, useEffect } from 'react';
import { Button } from "@material-tailwind/react";
import { Rating } from "@material-tailwind/react";
import { GetAllOrders } from '../../../api/artistApi';
// import { Tag } from '@material-tailwind/react/Tag';
// import { ToggleButton } from '@mui/material';


export default function BasicDemo() {
    const [data, setData] = useState();

    useEffect(() => {
       const fetchOrder=async()=>{
        const res=await GetAllOrders()
        setData(res.data)
       }
       fetchOrder()
    }, []);
    console.log(data);

    // const getSeverity = (product) => {
    //     switch (product.inventoryStatus) {
    //         case 'INSTOCK':
    //             return 'success';

    //         case 'LOWSTOCK':
    //             return 'warning';

    //         case 'OUTOFSTOCK':
    //             return 'danger';

    //         default:
    //             return null;
    //     }
    // };

        return (
            <div className='grid grid-cols-2 gap-5'>    
            {/* {data && data.AllOrders.map((id)=>( */}
            <div className="col-12 bg-gray-300 rounded-md" >
                <div className="flex flex-col xl:flex-row xl:items-start p-4 gap-4">
                    <img className="w-44 h-44 rounded-lg object-fill" src="https://i.pinimg.com/236x/5f/40/6a/5f406ab25e8942cbe0da6485afd26b71.jpg" />
                    <div className="flex flex-col sm:flex-row justify-between items-center xl:items-start flex-1 gap-4">
                        <div className="flex flex-col items-center sm:items-start gap-3">
                            <div className="text-2xl font-bold text-gray-900">name</div>
                            <Rating value="5"readOnly cancel={false}></Rating>
                            <div className="flex items-center gap-3">
                                <span className="flex items-center gap-2">
                                    <i className="material-icons">local_offer</i>
                                    <span className="font-semibold">Category</span>
                                </span>
                                {/* <Tag value="status" ></Tag> */}
                            </div>
                        </div>
                        <div className="flex sm:flex-col items-center sm:items-end gap-3 sm:gap-2">
                            <span className="text-2xl font-semibold">$1233</span>
                            <Button color="indigo" buttonType="filled" size="lg" rounded={true} block={false} iconOnly={false} ripple="light" disabled='OUTOFSTOCK'>
                                <i className="material-icons">shopping_cart</i>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12 bg-gray-300 rounded-md">
                <div className="flex flex-col xl:flex-row xl:items-start p-4 gap-4">
                    <img className="w-44 h-44 rounded-lg object-fill" src="https://i.pinimg.com/236x/5f/40/6a/5f406ab25e8942cbe0da6485afd26b71.jpg" />
                    <div className="flex flex-col sm:flex-row justify-between items-center xl:items-start flex-1 gap-4">
                        <div className="flex flex-col items-center sm:items-start gap-3">
                            <div className="text-2xl font-bold text-gray-900">name</div>
                            <Rating value="5"readOnly cancel={false}></Rating>
                            <div className="flex items-center gap-3">
                                <span className="flex items-center gap-2">
                                    <i className="material-icons">local_offer</i>
                                    <span className="font-semibold">Category</span>
                                </span>
                                {/* <Tag value="status" ></Tag> */}
                            </div>
                        </div>
                        <div className="flex sm:flex-col items-center sm:items-end gap-3 sm:gap-2">
                            <span className="text-2xl font-semibold">$1233</span>
                            <Button color="indigo" buttonType="filled" size="lg" rounded={true} block={false} iconOnly={false} ripple="light" disabled='OUTOFSTOCK'>
                                <i className="material-icons">shopping_cart</i>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            {/* ))} */}
            </div>
        );
   
 
}
