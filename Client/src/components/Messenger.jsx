import React from 'react'
import LoginDialog from './account/LoginDialog.jsx'
import {AppBar , Toolbar , styled , Box } from "@mui/material"
import ChatDialog from './Chat/ChatDialog.jsx'
import { useContext } from 'react'


import { AccountContext } from '../Context/AccountProvider.jsx'

const Messenger = () => {

  const {account } = useContext(AccountContext);

  const Component = styled(Box)`
   height:100vh;
   background:#DCDCDC;
  `
    const Header = styled(AppBar)`
    height:125px;
    background-color: #00bfa5;
    box-shadow:none;
     `


    const LoginHeader = styled(AppBar)`
    height:225px;
    background-color: #00bfa5;
    box-shadow:none;
     `
  return (
    <div>
      <Component>
        {
         account ? <>
         <  Header>
             <Toolbar>

             </Toolbar>
        </ Header>
             <ChatDialog/>  
       </> : <> 
       < LoginHeader>
             <Toolbar>

             </Toolbar>
            </LoginHeader>
        
       <LoginDialog/>
      </>}
     
      
    </Component>
    </div>
  )
}

export default Messenger
