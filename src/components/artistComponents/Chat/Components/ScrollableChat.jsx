import  { useEffect, useRef } from 'react';
import { Avatar } from "@chakra-ui/avatar";
import { Tooltip } from "@chakra-ui/tooltip";
import { ChatState } from "./Context/ChatProvider";
import {   
    isLastMessage,
    isSameSender,
    isSameSenderMargin,
    isSameUser, 
} from "./Config/ChatLogics";
import dp from "../../../../assets/userAssets/userLogin2.jpg"


const ScrollableChat = ({ messages }) => {
  console.log(messages,"Messages In Scrollable");
  const { user } = ChatState();
  const chatContainerRef = useRef(null);
  console.log(user,"user In Scrollable");

  // Scroll to the bottom of the container when new messages arrive
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div
      ref={chatContainerRef}
      style={{
        maxHeight: '500px', // Set a maximum height for the scrollable container
        overflowY: 'auto',
      }}
    >
      {messages &&
        messages.map((m, i) => (
          <div style={{ display: "flex" }} key={i}>
            {(isSameSender(messages, m, i, user.id) ||
              isLastMessage(messages, i, user.id)) && (
              <Tooltip label={m.sender.name} placement="bottom-start" hasArrow>
                {m.sender.pic ? (
                  <Avatar
                    mt="7px"
                    mr={1}
                    size="sm"
                    cursor="pointer"
                    name={m.sender.name}
                    src={m.sender.pic}
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
                    src={dp}
                  />
                )}
              </Tooltip>
            )}
            <span
              style={{
                backgroundColor: `${
                  m.sender.artist
                    ? m.sender.artist._id === user.id
                      ? "#BEE3F8"
                      : "#B9F5D0"
                    : m.sender.user._id === user.id
                    ? "#BEE3F8"
                    : "#B9F5D0"
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
        ))}
    </div>
  );
};

export default ScrollableChat;
