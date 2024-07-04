import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ChatHeader from './ChatHeader'
import Messages from './Messages'
import { getConversation } from '../../../Service/api.js'


import { useContext  } from 'react'
import { AccountContext } from '../../../Context/AccountProvider'

const ChatBox = () => {
  const { person } = useContext(AccountContext);
  const { account  } = useContext(AccountContext);

  const [conversation, setConversation] = useState({});



  useEffect(() => {
    const getConversationDetails = async () => {
        let data = await getConversation({ senderId: account.sub, receiverId: person.sub });
        setConversation(data);
    }
    getConversationDetails();
}, [person.sub]);


  return (
    <Box style={{height: "70%"}}>
        <ChatHeader person={person}/>
        <Messages person={person} conversation={conversation} />
       
    </Box>
  )
}

export default ChatBox;
