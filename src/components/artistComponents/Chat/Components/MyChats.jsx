// import { AddIcon } from "@chakra-ui/icons";
// import { Card, Stack, Text } from "@chakra-ui/layout";
// import { useToast } from "@chakra-ui/toast";
import axios from "axios";
import dp from "../../../../assets/userAssets/userLogin2.jpg"
import { useEffect, useState } from "react";
// import ChatLoading from "./ChatLoading";
// import { Button } from "@chakra-ui/react";
// import { axiosUserInstance } from "../../../../Constants/axios";
import { ChatState } from "./Context/ChatProvider";
// import { getSender } from "../Config/ChatLogistics";
import { Card, Spinner, Typography } from "@material-tailwind/react";
import { Box, Stack, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import ArtistRequest from "../../../../utils/artistRequest";
import SideDrawer from "./SideDrawer";

const MyChats = ({ fetchAgain }) => {
    const [loggedUser, setLoggedUser] = useState();

    const { selectedChat, setSelectedChat, user, chats, setChats } = ChatState();

    //   const toast = useToast();

     const artistInfo = useSelector((state) => state.user.artistInfo);
    console.log(artistInfo);
    useEffect(() => {
        setLoggedUser(artistInfo);
        fetchChats();
        // eslint-disable-next-line
    }, [artistInfo,fetchAgain]);
    
    const fetchChats = async () => {
        try {
            const userId = user.id
            console.log(userId,"hkkkkkkkkkkkkkkkkkkkkkkkllllllllllllllllllllllll");
            const { data } = await ArtistRequest.get(`/fetchchat/${userId}`);
            
            const sortedChats = data.sort((chatA, chatB) => {
                const latestMessageTimeA = new Date(chatA.latestMessage.createdAt);
                const latestMessageTimeB = new Date(chatB.latestMessage.createdAt);
    
                return latestMessageTimeB - latestMessageTimeA;
            });
            setChats(sortedChats);
        } catch (error) {
            //   toast({
            //     title: "Error Occured!",
            //     description: "Failed to Load the chats",
            //     status: "error",
            //     duration: 5000,
            //     isClosable: true,
            //     position: "bottom-left",
            //   });
            console.log("Failed to Load the chats");
        }
    };

   


    
    return (
        <Box
            display={{ base: selectedChat ? "none" : "flex", md: "flex" }}
            flexDir="column"
            alignItems="center"
            p={3}
            bg="white"
            w={{ base: "100%", md: "31%" }}
            borderRadius="lg"
            borderWidth="1px"
        >
            <Box
                display="flex"
                w="100%"
                alignItems="center"
                justifyContent="space-around"
                >
                <Box
                    pb={3}
                    px={3}
                    fontSize={{ base: "28px", md: "30px" }}
                    fontFamily="Work sans"
                    display="flex"
                    w="100%"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    My Chats
                </Box>
                <Box>
                    {user && <SideDrawer />}
                </Box>
            </Box>
            <Box
                display="flex"
                flexDir="column"
                p={3}
                bg="#F8F8F8"
                w="100%"
                h="100%"
                borderRadius="lg"
                overflowY="hidden"
            >
                
                {chats ? (
                    <Stack overflowY="scroll">
                        {chats.map((chat) => (
                            <Box
                                onClick={() => setSelectedChat(chat)}
                                className={`cursor-pointer px-3 py-2 rounded-lg flex
                                    ${selectedChat === chat
                                        ? 'bg-teal-500 text-white'
                                        : 'bg-gray-200 text-black'
                                    }`}
                                key={chat._id}
                            >
                                 <Box>
                                    
                                    <img src={chat.users.user ? dp : null } className="h-10 w-10 me-3 rounded-full"/>
                                </Box>
                                <Box>
                                <Text>
                                    {chat.users.user.name}
                                </Text>
                                {chat.latestMessage && (
                                    <Text fontSize="xs">
                                        <b>
                                            {chat.latestMessage.sender.artist
                                                ? chat.latestMessage.sender.artist.name
                                                : chat.latestMessage.sender.user.name}
                                            :
                                        </b>
                                        {chat.latestMessage.content.length > 50
                                            ? chat.latestMessage.content.substring(0, 20) + "..."
                                            : chat.latestMessage.content}
                                    </Text>
                                )}
                            </Box>
                            </Box>
                        ))}
                    </Stack>
                ) : (
                    //   <ChatLoading />
                    <Spinner />
                )}
            </Box>
        </Box>
    );
};

export default MyChats;
