import React, { useState, useEffect } from "react";
import { Button, Typography } from "@material-tailwind/react";
import { Rating } from "@material-tailwind/react";
import { GetAllOrders } from "../../../api/artistApi";

// import { Tag } from '@material-tailwind/react/Tag';
// import { ToggleButton } from '@mui/material';

export default function BasicDemo() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchOrder = async () => {
      const res = await GetAllOrders();
      setData(res.data.allOrders);
    };
    fetchOrder();
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
    <div className="grid grid-cols-2 gap-5">
      {data &&
        data.map((item) => (
          <div className="col-12 bg-gradient-to-bl from-[#acb5a0] to-[#d8e1d3] shadow-2xl rounded-md " key={item._id}>
            <div className="flex flex-col xl:flex-row xl:items-start p-4 gap-4">
              <img
                className="w-44 h-44 rounded-lg object-fill"
                src="https://i.pinimg.com/236x/5f/40/6a/5f406ab25e8942cbe0da6485afd26b71.jpg"
              />
              <div className="flex flex-col sm:flex-row justify-between items-center xl:items-start flex-1 gap-4">
                <div className="flex flex-col items-center sm:items-start gap-3">
                  <Typography variant="h6"  style={{fontFamily: 'cursive'}}>
                    Name :  {item.userId.name.toUpperCase()}
                    </Typography>
                  <div className="flex items-center gap-3">
                    <Typography variant="h6"  style={{fontFamily: 'cursive'}}>
                    From : {item.fromDate.toUpperCase()}
                    </Typography>
                    {/* <Tag value="status" ></Tag> */}
                  </div>
                  <div className="flex items-center gap-3">
                    <Typography variant="h6"  style={{fontFamily: 'cursive'}}>
                    To : {item.toDate.toUpperCase()}
                    </Typography>
                    {/* <Tag value="status" ></Tag> */}
                  </div>
                  <div className="flex items-center gap-3">
                  <Typography variant="h6"  style={{fontFamily: 'cursive'}}>
                    Days: {item.totalDays}
                    </Typography>
                    {/* <Tag value="status" ></Tag> */}
                  </div>
                  <div className="flex items-center gap-3">
                  <Typography variant="h6" style={{fontFamily: 'cursive'}}>
                        Amount : ₹ {item.totalAmount}
                    </Typography>
                    {/* <Tag value="status" ></Tag> */}
                  </div>
                </div>
                <div className="flex sm:flex-col items-center sm:items-end gap-3 sm:gap-2">
                  {item.status === "Approved" ? (
                    <Button  className="bg-[#1f442e]">{item.status}</Button>
                  ) : item.status === "Rejected" ? (
                    <Button className="bg-[#793333]">{item.status}</Button>
                  ) : (
                    <Button>{item.status}</Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
