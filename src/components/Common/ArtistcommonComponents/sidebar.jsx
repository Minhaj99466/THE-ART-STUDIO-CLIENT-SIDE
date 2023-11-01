import React from "react";
import {
  Card,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  InboxIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";



const Sidebar = () => {

  const menuItems = [
    {
      icon: <PresentationChartBarIcon className="h-7 w-5" />,
      text: "Gallery",
      onClick: () => (navigate('/artist/gallery')),
    },
    {
      icon: <ShoppingBagIcon className="h-7 w-5" />,
      text: "Notifications",
      suffix: <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />,
      onClick: () => (navigate('/artist/notifications')),
    },
    {
      icon: <InboxIcon className="h-7 w-5" />,
      text: "Messages",
      onClick: () => console.log("clients"),
    },
    {
      icon: <Cog6ToothIcon className="h-7 w-5" />,
      text: "Posts",
      onClick: () => console.log("clients"),
    },
  ];
  
  
  const navigate = useNavigate();

  return (
    <Card className="h-screen  max-w-[20rem] p-4 shadow-sm shadow-[#000000]  bg-[#d8e1d3]  rounded-none fixed ">
      <List className="mb-2 p-4">
        {menuItems.map((item, index) => (
          <ListItem key={index} onClick={item.onClick}>
            <ListItemPrefix>{item.icon}</ListItemPrefix>
            {item.text}
            {item.suffix && <ListItemSuffix>{item.suffix}</ListItemSuffix>}
          </ListItem>
        ))}
      </List>
    </Card>
  );
};

export default Sidebar;
