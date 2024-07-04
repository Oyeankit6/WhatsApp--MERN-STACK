import React from 'react'
import  Dialog  from '@mui/material/Dialog';
import Menu from './menu/Menu';
import { Box , styled } from '@mui/material';
import EmpityChat from './chat/EmpityChat';
import ChatBox from './chat/ChatBox';
import { useContext } from 'react';
import { AccountContext } from '../../Context/AccountProvider';




const  Component=styled(Box)`
display:flex;
`;

const RightComponent=styled(Box)`
width:73%;
min-width:300px;
height:100%;
border-left:1px solid rgba(0,0,0,0.14);
`

const LeftComponent=styled(Box)`
min-width:450px;
`


const dialogStyle = {
    height:"95%",
    maxHeight:"100%",
    margin :"20px",
   width:"100%",
   borderRadius:0,
    maxWidth:"100%",
    boxShadow:"none",
    overflow:"hidden",
    backgroundColor:"none", 
   }
const ChatDialog = () => {

  const { person } = useContext(AccountContext)

  return (
    <div>
     <Dialog open={true} 
      PaperProps={{sx:dialogStyle}}
      hideBackdrop = {true}
      maxWidth={"md"}

      >
        <Component>
          <LeftComponent>
                  <Menu/>
          </LeftComponent>
          <RightComponent>  
                  {Object.keys(person).length ? <ChatBox/> : <EmpityChat/>}
          </RightComponent>
        </Component>



      </Dialog>
    </div>
  )
}

export default ChatDialog;
