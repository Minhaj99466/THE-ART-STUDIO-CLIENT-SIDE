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
      <Card className="h-screen  max-w-[20rem] p-4 shadow-sm shadow-blue-gray-100  bg-blue-gray-200  rounded-none fixed ">
       
        <List className="mb-2 p-4">
          <ListItem onClick={()=>navigate('/admin/')}>
            <ListItemPrefix>
              <PresentationChartBarIcon className="h-7 w-5" />
            </ListItemPrefix>
            Dashboard
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <ShoppingBagIcon className="h-7 w-5" />
            </ListItemPrefix>
            Notifications
            <ListItemSuffix>
              <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
            </ListItemSuffix>
          </ListItem>
          <ListItem onClick={()=>navigate('/admin/artist')}>
            <ListItemPrefix>
              <InboxIcon className="h-7 w-5" />
            </ListItemPrefix>
            ArtistList
            
          </ListItem>
          <ListItem onClick={()=>navigate('/admin/user')}>
            <ListItemPrefix>
              <UserCircleIcon className="h-7 w-5" /> 
            </ListItemPrefix>
            UserList
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <Cog6ToothIcon className="h-7 w-5" />
            </ListItemPrefix>
            Settings
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <PowerIcon className="h-7 w-5" />
            </ListItemPrefix>
            Log Out
          </ListItem>
        </List>
      </Card>
      </>
    );
  }