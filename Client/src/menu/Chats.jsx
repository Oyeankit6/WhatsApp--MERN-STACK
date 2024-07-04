import { Box, Typography , styled} from '@mui/material'
import React from 'react';
import { AccountContext } from "../Context/AccountProvider.jsx"
import { useContext } from 'react';
import { setConversation } from '../Service/api.js';
import Conversations from './Conversations.jsx';


const Component = styled(Box)`
display:flex;
height:45px;
padding:13px 0;
cursor:pointer;
`
const Image = styled("img")({
    width:50,
    height:50,
    borderRadius:"50%",
    padding:"0  14px",
    objectFit:"cover",
})
const Chats = ({user}) => {

    const { setPerson  , account } = useContext(AccountContext);

   const getUser = async ()=>{
          setPerson(user);
         let data= await setConversation({ senderId: account.sub, receiverId: user.sub });
         
          
   }

  return (
  <Component onClick={()=>getUser()}>
           <Box>
                <Image src={user.picture} alt="" />
           </Box>
           <Box style={{width: '100%'}}>
                <Box>
                    <Typography>
                        {user.name}
                    </Typography>
                </Box>

           </Box>
  </Component>
  )
}

export default Chats


