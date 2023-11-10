
// import { useDisclosure } from "@chakra-ui/hooks";
// import { Input } from "@chakra-ui/input";
// import {
//     Menu,
//     MenuButton,
//     MenuDivider,
//     MenuItem,
//     MenuList,
// } from "@chakra-ui/menu";
// import {
//     Drawer,
//     DrawerBody,
//     DrawerFooter,
//     DrawerHeader,
//     DrawerOverlay,
//     DrawerContent,
//     DrawerCloseButton,
//   } from '@chakra-ui/react'
// import { Tooltip } from "@chakra-ui/tooltip";
// import { BellIcon, ChevronDownIcon } from "@chakra-ui/icons";
// import { Avatar } from "@chakra-ui/avatar";

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import {MagnifyingGlassIcon} from '@heroicons/react/24/outline'
// import { useToast } from "@chakra-ui/toast";

// import ChatLoading from "../ChatLoading";

import {
    Spinner,
    Drawer,
    Button,
    Typography,
    IconButton,
    Input,
    Textarea,
    Tooltip,
    Card
} from '@material-tailwind/react';

import { ChatState } from "./Context/ChatProvider";
// import { ChatState } from "../Context/ChatProvider";
// import UserList from "../Users/UserList";
import userRequest from "../../../../utils/userRequest";

function SideDrawer() {
    const [open, setOpen] = useState(false);
    const openDrawer = () => setOpen(true);
    const closeDrawer = () => setOpen(false);

    const [search, setSearch] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const [loading, setLoading] = useState(false);
    const [loadingChat, setLoadingChat] = useState(false);

    const {
        setSelectedChat,
        user,
        notification,
        setNotification,
        chats,
        setChats,
    } = ChatState();
    // console.log(user, "ddddddddddd");

    // const toast = useToast();
    // const { isOpen, onOpen, onClose } = useDisclosure();
    const navigate = useNavigate();

    // const logoutHandler = () => {
    //     localStorage.removeItem("userInfo");
    //     navigate('/');
    // };



    const handleSearch = async () => {
        if (!search) {
            // toast({
            //     title: "Please Enter something in search",
            //     status: "warning",
            //     duration: 5000,
            //     isClosable: true,
            //     position: "top-left",
            // });
            console.log("Please Enter something in search");
            return;
        }

        try {
            setLoading(true);

            const config = {
                headers: {
                    Authorization: `Bearer ${user.token}`,
                },
            };

            const { data } = await userRequest.get(`/usersearch?search=${search}`, config);

            setLoading(false);
            setSearchResult(data);
        } catch (error) {
            // toast({
            //     title: "Error Occured!",
            //     description: "Failed to Load the Search Results",
            //     status: "error",
            //     duration: 5000,
            //     isClosable: true,
            //     position: "bottom-left",
            // });
            console.log("somthing went wrong");
        }
    };

    const accessChat = async (artistId) => {
        // console.log(artistId);

        console.log(user.id,artistId,"the id");
        try {
            setLoadingChat(true);
            // const config = {
            //     headers: {
            //         "Content-type": "application/json",
            //         Authorization: `Bearer ${user.user.token}`,
            //     },
            // };
            // console.log(config);
            const userId = user.id
            const { data } = await userRequest.post(`/accesschat`, { artistId, userId });
            console.log(data);

            if (!chats.find((c) => c._id === data._id)) {
                console.log('nothing');
                setChats([data, ...chats])
            }
            console.log(data, 'data');
            console.log(chats, 'chat');
            setSelectedChat(data);
            setLoadingChat(false);
            // onClose();
            setOpen(!open)
        } catch (error) {
            // toast({
            //     title: "Error fetching the chat",
            //     description: error.message,
            //     status: "error",
            //     duration: 5000,
            //     isClosable: true,
            //     position: "bottom-left",
            // });
            console.log("Error fetching the chat")
        }
    };

    return (
        <>

            <>
            <div onClick={openDrawer} className="flex bg-[#d6cbcb] p-1 rounded-3xl cursor-pointer" >
                <Typography className="mx-3 ">search</Typography>
                <MagnifyingGlassIcon className="h-6 w-6 me-3"/>
            </div>
                <Drawer open={open} onClose={closeDrawer}>
                    <div className='p-5'>


                        <Input
                            className=""
                            label="Search by name or email:"
                            type="text"
                            variant="outlined"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />

                        <Button  variant="text" onClick={handleSearch}>search</Button>
                    </div>
                    {loading ? (
                        <div>Loading...</div>
                    ) : (
                        <div>
                            {searchResult?.map((user) => (
                                <Card key={user._id} className="bg-[#a49d9d] h-9 rounded-sm text-black">
                                    <Button variant="text" onClick={() => accessChat(user._id)}>
                                        {user.name}
                                    </Button>
                                </Card>
                            ))}
                        </div>
                    )}
                    {loadingChat && <div>Loading chat...</div>}
                </Drawer>
            </>
        </>
    );
}

export default SideDrawer;
