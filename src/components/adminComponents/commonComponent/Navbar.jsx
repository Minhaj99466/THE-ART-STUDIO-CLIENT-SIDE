import React from "react";
import {
//   Navbar,
  MobileNav,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
//   Card,

  IconButton,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars2Icon,
ArrowLeftOnRectangleIcon
} from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import { Logoutdetails } from "../../../redux/adminSlice/adminSlice";
import { useNavigate } from "react-router-dom";


 

 
function  ProfileMenu() {
  const dispatch=useDispatch()
  const navigate = useNavigate()


  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
 
  const closeMenu = () => setIsMenuOpen(false);

  const handleLogout = async () => {
    localStorage.removeItem("AdminToken");
    dispatch(
      Logoutdetails({
        adminInfo: {},
      })
    );
    navigate("/admin/login");
  };
 
  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
        >
          <Avatar
            variant="circular"
            size="sm"
            alt="tania andrew"
            className="border border-gray-900 p-0.5"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          />
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
       
          return (
            <MenuItem
              
              onClick={closeMenu}
              className={`flex items-center   ${
                 "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                  
              }`}
            >
              
              <Typography
               type="button"
                variant="small"
                className="font-normal"
                color="red"  
              >
                 <button onClick={handleLogout}> <ArrowLeftOnRectangleIcon className="w-5 h-5"/> SignOut</button>
                 
              </Typography>
            </MenuItem>
          );
      
      </MenuList>
    </Menu>
  );
}
 


 

 
export default function ComplexNavbar() {
  const [isNavOpen, setIsNavOpen] = React.useState(false);
 
  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false),
    );
  }, []);
 
  return (
    // <navbar className="w-screen    bg-green-400">
    <>
    <div >
      <div className="relative h-16 px-6  mx-auto flex items-center text-blue-gray-800 shadow-sm shadow-blue-gray-100 bg-blue-gray-200 ">
        <Typography
          as="a"
          href="#"
          className="mr-4 ml-5 font-extrabold text-black font-serif"
        >
          THE ART STUDIO
        </Typography>
        
        <IconButton
          size="sm"
          color="blue-gray"
          variant="text"
          onClick={toggleIsNavOpen}
          className="ml-auto mr-2 lg:hidden"
        >
          <Bars2Icon className="h-6 w-6" />
        </IconButton>
        <ProfileMenu />
      </div>
      <MobileNav open={isNavOpen} className="overflow-scroll">
        
      </MobileNav>
    {/* // </navbar> */}
    </div>
    </>
  );
}