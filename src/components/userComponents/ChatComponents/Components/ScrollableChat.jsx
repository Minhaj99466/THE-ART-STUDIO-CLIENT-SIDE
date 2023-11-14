import { useEffect, useRef } from 'react';
import { Avatar } from "@chakra-ui/avatar";
import { Tooltip } from "@chakra-ui/tooltip";
import { ChatState } from "./Context/ChatProvider";
import dp from "../../../../assets/userAssets/Envelope-cuate.png"
// import {   
//     isLastMessage,
//     isSameSender,
//     isSameSenderMargin,
//     isSameUser, 
// } from "../Config/ChatLogics";
import { 
    isLastMessage,
    isSameSender,
    isSameSenderMargin,
    isSameUser

} from './Config/ChatLogics';

const ScrollableChat = ({ messages }) => {
  const { user } = ChatState();
  const chatContainerRef = useRef(null);


  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div
      ref={chatContainerRef}
      style={{
        maxHeight: '500px',
        overflowY: 'auto',
      }}
    >
      {messages &&
        messages.map((m, i) => (
          <div style={{ display: "flex", flexDirection: "column" }} key={i}>
          <div style={{ display: "flex" }}>
            {(isSameSender(messages, m, i, user.id) ||
              isLastMessage(messages, i, user.id)) && (
              <Tooltip label={m.sender.artist.name} placement="bottom-start" hasArrow>
                { m.sender.artist.displaypicture ? (
                  <Avatar
                    mt="7px"
                    mr={1}
                    size="sm"
                    width={"8"}
                    height={"8"}
                    cursor="pointer"
                    name={m.sender.name}
                    src={ m.sender.artist.displaypicture}
                  />
                ) : (
                  <Avatar
                    mt="7px"
                    mr={1}
                    width={"8"}
                    height={"8"}
                    size="2px"
                    cursor="pointer"
                    name={m.sender.name}
                    src={dp }
                    // src={m.sender ? m.sender.artist.displaypicture : dp}
                  />
                )}
              </Tooltip>
            )}
            <span
           
              style={{
                backgroundColor: `${
                  m.sender.user
                    ? m.sender.user.id === user.id
                      ? "#BEE3F8"
                      : "#7C7D80"
                    : m.sender.artist._id === user.id
                    ? "#BEE3F8"
                    : "#FFF"
                }`,
                color: `${
                  m.sender.user
                    ? m.sender.user.id === user.id
                      ? "#ffff"
                      : "#ffff"
                    : m.sender.artist._id === user.id
                    ? "#000"
                    : "#000"
                }`,
                marginLeft: isSameSenderMargin(messages, m, i, user.id),
                marginTop: isSameUser(messages, m, i, user.id) ? 3 : 10,
                borderRadius: "20px",
                padding: "5px 15px",
                maxWidth: "75%",
              }}
            >
              {m.content}
            </span>
              </div>
              <span
  style={{
    marginLeft: m.sender.user
      ? m.sender.user.id === user.id
        ? "auto"
        : "0" // Align time to right if the sender is a user
      : "auto", // Align time to left if the sender is an artist
    alignSelf: "flex-end",
    fontSize:"10px"
  }}
>
{new Date(m.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
</span>
          </div>
        ))}
    </div>
  );
};

export default ScrollableChat;
