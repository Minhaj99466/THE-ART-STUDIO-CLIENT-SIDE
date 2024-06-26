import React from "react";
import {
  //   Navbar,
  // MobileNav,
  Typography,
  Drawer,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  //   Card,
  Badge,
  IconButton,
} from "@material-tailwind/react";
import {
  // UserCircleIcon,
  ChevronDownIcon,
  // PowerIcon,
  ArrowLeftOnRectangleIcon,
  Bars3Icon,
  BellIcon,
} from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import { Logoutdetails } from "../../../Redux/adminSlice/adminSlice";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../../components/Common/AdmincommonComponent/Sidebar";
import img from "../../../HomeImg/FAÜNA.jpeg";

function ProfileMenu() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
          className={`flex items-center   ${"hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"}`}
        >
          <Typography
            type="button"
            variant="small"
            className="font-normal"
            color="red"
          >
            <button onClick={handleLogout}>
              {" "}
              <ArrowLeftOnRectangleIcon className="w-5 h-5" /> SignOut
            </button>
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
      () => window.innerWidth >= 960 && setIsNavOpen(false)
    );
  }, []);

  const [open, setOpen] = React.useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    // <navbar className="w-screen    bg-green-400">
    <>
      <navbar className="  lg:rounded-none   fixed top-0 left-0 right-0 bg-[#023E8A] z-50 ">
        <div className="relative mx-auto flex items-center text-blue-gray-900 py-3 bg-[#5d7582] ">
          <Drawer
            open={open}
            onClose={closeDrawer}
            className="bg-[#5d7582] md:invisible"
          >
            <div className="mb-2 flex items-center justify-between p-4 md:h-full">
              <Typography variant="h5" color="white">
                THE ART STUDIO
              </Typography>
           
              <IconButton variant="text" color="white" onClick={closeDrawer}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </IconButton>
              
            </div>
            <Sidebar />
          </Drawer>
          <Bars3Icon
            onClick={openDrawer}
            className="h-8 w-8 ms-5 cursor-pointer text-white md:hidden"
          />
          <img src={img} alt="" className="h-14 ps-7 py-1" />
          <h1>THE ART STUDIO</h1>
    
          {/* <div className="absolute top-2/4 left-2/4 hidden -translate-x-2/4 -translate-y-2/4 lg:block">
   
  </div> */}
          <IconButton
            size="sm"
            color="blue-gray"
            variant="text"
            onClick={toggleIsNavOpen}
            className="ml-auto mr-2 lg:hidden"
          ></IconButton>
          <ProfileMenu />
          
        </div>
      </navbar>
    </>
  );
}
