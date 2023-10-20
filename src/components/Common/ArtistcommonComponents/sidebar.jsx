import {
  Card,
  // Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";
 



export default function Sidebar() {
  const navigate=useNavigate()
  return (
      <>
    <Card className="h-screen  max-w-[20rem] p-4 shadow-sm shadow-[#000000]  bg-[#d8e1d3]  rounded-none fixed ">
     
      <List className="mb-2 p-4">
        <ListItem >
          <ListItemPrefix>
            <PresentationChartBarIcon className="h-7 w-5" />
          </ListItemPrefix>
          Bookings
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <ShoppingBagIcon className="h-7 w-5" />
          </ListItemPrefix>
          Clients
          <ListItemSuffix>
            <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
          </ListItemSuffix>
        </ListItem>
        <ListItem >
          <ListItemPrefix>
            <InboxIcon className="h-7 w-5" />
          </ListItemPrefix>
          Messages
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <Cog6ToothIcon className="h-7 w-5" />
          </ListItemPrefix>
          Posts
        </ListItem>
      </List>
    </Card>
    </>
  );
}