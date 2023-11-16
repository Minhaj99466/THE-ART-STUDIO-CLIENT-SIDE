// import { AddIcon } from "@chakra-ui/icons";
import { Stack, Text } from "@chakra-ui/layout";
import dp from "../../../../assets/userAssets/Envelope-cuate.png"
import axios from "axios";
import { useEffect, useState } from "react";
// import ChatLoading from "./ChatLoading";
// import { Button } from "@chakra-ui/react";
import userRequest from "../../../../utils/userRequest";
import  ChatState from "./Context/ChatProvider";
// import { getSender } from "../Config/ChatLogistics";
import { Spinner } from "@material-tailwind/react";
import { Box } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import SideDrawer from "./SideDrawer";

const MyChats = ({ fetchAgain }) => {
    const [loggedUser, setLoggedUser] = useState();

    const { selectedChat, setSelectedChat, user, chats, setChats } = ChatState();

    //   const toast = useToast();

    const fetchChats = async () => {
        try {
           
            const userId = user.id

            const { data } = await userRequest.get(`/fetchchat/${userId}`);

            const sortedChats = data.sort((chatA, chatB) => {
                const latestMessageTimeA = new Date(chatA.latestMessage.createdAt);
                const latestMessageTimeB = new Date(chatB.latestMessage.createdAt);
    
                // Sort in descending order (newest message first)
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

    const  userInfo  = useSelector((state) => state.user.userInfo)
    useEffect(() => {
        setLoggedUser(userInfo);
        fetchChats();
        // eslint-disable-next-line
    }, [fetchAgain]);

    return (
        <Box
            display={{ base: selectedChat ? "none" : "flex", md: "flex" }}
            flexDir="column"
            alignItems="center"
            p={3}

            w={{ base: "100%", md: "31%" }}
            borderRadius="lg"
            borderWidth="1px"
            bg="#EDE9E3"
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
                bg="#F2EEE3"
                w="100%"
                h="100%"
                borderRadius="lg"
                overflowY="hidden"
        
            >
                {chats ? (
                    <Stack >
                        {chats.map((chat) => (
                            <Box
                                onClick={() => setSelectedChat(chat)}
                                cursor="pointer"
                                bg={selectedChat === chat ? "#b5b1a6" : "white"}
                                color={selectedChat === chat ? "white" : "black"}
                                px={3}
                                py={2}
                                borderRadius="lg"
                                key={chat._id}
                                display="flex"
                            >
                                <Box>
                                    <img src={chat.users.artist ? chat.users.artist.displaypicture : dp} className="h-10 w-10 me-3 rounded-full"/>
                                </Box>
                                <Box>
                                    <Text>
                                        {chat.users.artist.name}
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
                                                ? chat.latestMessage.content.substring(0, 51) + "..."
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
