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
 



export default function Sidebar() {
  return (
      <>
    <Card className="h-[calc(100vh-2rem)]  w-full max-w-[20rem] p-4 shadow-sm shadow-blue-gray-100  bg-[#d7bf9d]  rounded-none fixed">
     
      <List className="mb-2 p-4">
        <ListItem>
          <ListItemPrefix>
            <PresentationChartBarIcon className="h-7 w-5" />
          </ListItemPrefix>
          Dashboard
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <ShoppingBagIcon className="h-7 w-5" />
          </ListItemPrefix>
          E-Commerce
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <InboxIcon className="h-7 w-5" />
          </ListItemPrefix>
          Inbox
          <ListItemSuffix>
            <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
          </ListItemSuffix>
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <UserCircleIcon className="h-7 w-5" />
          </ListItemPrefix>
          Profile
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