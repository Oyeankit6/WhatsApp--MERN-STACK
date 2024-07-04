import { Box, styled } from "@mui/material";
import React, { useContext, useState,useref, useEffect, useRef  } from "react";
import ChatFooter from "./ChatFooter";
import { AccountContext } from "../../../Context/AccountProvider";
import { newMessage, getMessages } from "../../../Service/api";
import MessagePrint from "./MessagePrint";

const Wrapper = styled(Box)`
  background-image: url(${"https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png"});
  background-size: 50%;
`;

const Component = styled(Box)`
  height: 78vh;
  overflow-y: scroll;
`;

const Container = styled(Box)`
  padding: 1px 80px;
`;

const Messages = ({ person, conversation }) => {
  const [value, setValue] = useState("");
  const [messages, setMessages] = useState([]);
  const [incomingMessage, setIncomingMessage] = useState(null);

  const scrollRef = useRef();

  const { account, cid ,  newMessageFlag, setNewMessageFlag } = useContext(AccountContext);
 

    




  useEffect(() => {
    const getMessageDetails = async () => {
      let data = await getMessages(cid);

      setMessages(data);
    };
    getMessageDetails();
  }, [cid, person._id, newMessageFlag]);


  useEffect(() => {
    scrollRef.current?.scrollIntoView({ transition: "smooth" })
}, [messages]);


useEffect(() => {
  incomingMessage && conversation?.members?.includes(incomingMessage.senderId) && 
      setMessages((prev) => [...prev, incomingMessage]);
  
}, [incomingMessage, conversation]);



  const sendText = async (e) => {
    const code = e.keyCode || e.which;

    if (code === 13) {
      let message = {
        senderId: account.sub,
        receiverId:person._id,
        conversationId: cid,
        type: "text",
        text: value,
      };
            console.log(message)
     

      await newMessage(message);
      setValue("");
      setNewMessageFlag((prev) => !prev);
    }
  };

  return (
    <Wrapper>
      <Component>
        {messages &&
          messages.map((message) => (
            <Container ref={scrollRef}>
              <MessagePrint message={message} />
            </Container>
          ))}
      </Component>
      <ChatFooter
        sendText={sendText}
        setValue={setValue}
        value={value}
       
      />
    </Wrapper>
  );
};

export default Messages;
