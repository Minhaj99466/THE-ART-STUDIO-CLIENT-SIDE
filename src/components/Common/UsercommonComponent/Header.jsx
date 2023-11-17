import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Badge,
} from "@material-tailwind/react";

import { Logoutdetails } from "../../../Redux/userSlice/userSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  ChatBubbleOvalLeftIcon,
  ChatBubbleBottomCenterIcon,
} from "@heroicons/react/24/solid";

import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BellIcon } from "@chakra-ui/icons";
import { getSender } from "../../userComponents/ChatComponents/Components/Config/ChatLogics";
import { ChatState } from "../../userComponents/ChatComponents/components/Context/ChatProvider";

export default function Header() {
  const [openNav, setOpenNav] = React.useState(false);
  const { notification, setNotification } = ChatState();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    localStorage.removeItem("UserToken");
    dispatch(
      Logoutdetails({
        userInfo: {},
      })
    );
    navigate("/login");
  };

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="/" className="flex items-center font-semibold">
          Home
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="/profile" className="flex items-center font-semibold">
          Profile
        </a>
      </Typography>

      <Menu>
        <MenuButton onClick={() => navigate("/chats")}>
          <IconButton size="lg" className=" bg-transparent">
            <Badge content={notification.length}>
              <ChatBubbleOvalLeftIcon className="hidden h-5 w-5 group-hover:block" />
              <ChatBubbleBottomCenterIcon className="block h-5 w-5 group-hover:hidden" />
            </Badge>
          </IconButton>
        </MenuButton>

        <MenuList>
          {!notification.length && "NO New Messages"}
          {/* {notification.map((notif) => (
            <MenuItem key={notif._id}>
              {notif.chat
                ? `New Message In ${notif.chat.chatName.users.artist.name}`
                : `New Message from ${getSender}`}
            </MenuItem>
          ))} */}
        </MenuList>
      </Menu>
    </ul>
  );

  return (
    <>
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4 bg-[#caa487] ">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            onClick={() => navigate("/")}
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-extrabold"
          >
            THE ART STUDIO
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            {localStorage.getItem("UserToken") ? (
              <Button
                onClick={handleLogout}
                variant="outlined"
                size="sm"
                className="hidden lg:inline-block hover:bg-black hover:text-white "
              >
                <span>Log Out</span>
              </Button>
            ) : (
              <Button
                onClick={() => navigate("/login")}
                variant="outlined"
                size="sm"
                className="hidden lg:inline-block hover:bg-black hover:text-white "
              >
                <span>Log In</span>
              </Button>
            )}
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          {navList}
          <Button
            variant="gradient"
            size="sm"
            fullWidth
            className="mb-2"
            onClick={handleLogout}
          >
            <span>Log Out</span>
          </Button>
        </MobileNav>
      </Navbar>
    </>
  );
}
