import  { createContext, useContext, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

// import { useNavigate } from 'react-router-dom';

const ChatContext=createContext()

function ChatUserProvider({children}) {
  
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
    // Add other propertxies as needed
  };
  const userInfo = useSelector((state) => state.user.userInfo);
  // const navigate =useNavigate()
  console.log(userInfo,"userINFOOOOOOOOOOOOOOOOOOOOOOOOOOOO");

  useEffect(() => {
    setUser(userInfo);
    setSelectedChat(initialChatState);

    // if (!userInfo) navigate("/");
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

export default ChatUserProvider