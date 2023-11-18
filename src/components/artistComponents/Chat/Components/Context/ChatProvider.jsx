import { createContext, useContext, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ChatContext=createContext()

function ChatProvider({children}) {

  const [selectedChat, setSelectedChat] = useState();
  const [user, setUser] = useState();
  const [notification, setNotification] = useState([]);
  const [chats, setChats] = useState([]);
  const initialChatState = {
    _id: '', 
    chatName: '', 
    users: [], 
    createdAt: '',
    updatedAt: '', 
    // Add other properties as needed
  };
  const artistInfo = useSelector((state) => state.user.artistInfo);
  console.log(artistInfo,"qqqqqqqqqqqqqqqqqqqqqqqq");
  const navigate=useNavigate()
  useEffect(() => {
    // const artistInfo = JSON.parse(localStorage.getItem("artistInfo"));
    setUser(artistInfo);
    setSelectedChat(initialChatState);

    if (!artistInfo) navigate("/artist");
  }, []);

  return (
    <ChatContext.Provider
      value={{
        selectedChat,
        setSelectedChat,
        user,
        setUser,
        notification,
        setNotification,
        chats,
        setChats,
      }}
    >
      {children}
    </ChatContext.Provider>
  )
}

export const ChatState=()=>{
    return useContext(ChatContext)
}

export default ChatProvider