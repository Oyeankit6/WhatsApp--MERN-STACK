import React from 'react'
import Drawer from '@mui/material/Drawer';

import { Box, Typography , styled } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Profile from './Profile';

const InfoDrawer = ({open , setOpen}) => {

  const handleClose =()=>{
    setOpen(false);
  }

  const Header = styled(Box)`
   background:#008069;
   height:107px;
   color:#FFFFFF;
   display:flex;
   & > svg, & >p{
   margin-top:auto;
   padding:15px;
   font-weight:600;
   }
  `
  const Component =styled(Box)`
  background: #ededed;
  height:85%;

  `
  const Text = styled(Typography)`
  font-size:18px
  `

  const DrawerStyle ={
    left:20,
    top:17,
    height:"95%",
    width:"30%",
    boxShadow:"none",
   
  }
  return (
    <div>
     
      <Drawer
    
      open={open}
      onClose={handleClose}
      PaperProps={{ sx: DrawerStyle}}
      style={{ zIndex:1500 }}
    >
     <Header>
         <ArrowBackIcon onClick={()=>setOpen(false)} />
         <Text>Profile</Text>
     </Header>
     <Component>
     <Profile/>
     </Component>
    </Drawer>
    </div>
  )
}

export default InfoDrawer;
