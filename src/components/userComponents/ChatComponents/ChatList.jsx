import { useState } from "react";
import  {ChatState}  from "./Components/Context/ChatProvider";
import { Box } from "@chakra-ui/react";
import './ChatList.css'
import Chatbox from './Components/ChatBox'
import MyChats from './Components/MyChat'
const ChatList = () => {
    const [fetchAgain, setFetchAgain] = useState(false);
    const { user } = ChatState();
    
    console.log(user,"userrrrrrrrrrrrrrrrrrrrrrrrrrzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzr");

    return (
        <div className="container mx-auto">
            <div style={{ width: "100%" }}>
           
            <Box  w="100%" h="91.5vh" p="10px" className="flex justify-between p-5">    
                {user && <MyChats fetchAgain={fetchAgain}  />}
                {user && (
                    <Chatbox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} className="flex h-9" />
                )}
            </Box>
        </div>
        </div>
    );
};

export default ChatList;
