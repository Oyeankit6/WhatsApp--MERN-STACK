import React from 'react'
import  Dialog  from '@mui/material/Dialog';
import { Typography, List ,ListItem , styled} from '@mui/material';
import { qrCodeImage } from '../../Constant/Constant';
import { Box,  margin, maxHeight, maxWidth } from '@mui/system';
import {jwtDecode}  from "jwt-decode";
import { useContext } from 'react';
import { AccountContext } from '../../Context/AccountProvider';
import { GoogleLogin } from '@react-oauth/google';
import { addUser } from '../../Service/api';



const Component = styled(Box)`
display:flex;` 
 
 const Container = styled (Box)`
 padding:56px 0 56px 56px`

 const QRCode =  styled('img')(
  {
    height:264,
    width:264,
    margin: "50px 0 0 50px",
  }
 )

 const Tittle = styled(Typography)`
font-size: 26px;
    margin-bottom: 25px;
    color: #525252;
    font-family: Segoe UI,Helvetica Neue,Helvetica,Lucida Grande,Arial,Ubuntu,Cantarell,Fira Sans,sans-serif;
    font-weight: 300;
 `
  const StyledList= styled(List)`
       & > li {
              padding: 0;
        margin-top: 15px;
        font-size: 18px;
        line-height: 28px;
        color: #4a4a4a;
       }
  `;

  const dialogStyle = {
    marginTop: '12%',
    height: '95%',
    width: '60%',
    maxWidth: '100',
    maxHeight: '100%',
    borderRadius: 0,
    boxShadow: 'none',
    overflow: 'hidden'
   }


 const LoginDialog = () => {

 


   
  
  
   const {setAccount ,showloginButton, setShowloginButton, setShowlogoutButton }= useContext(AccountContext);


   const onLoginSuccess= async (res)=>{
   const decoded= jwtDecode(res.credential);
   setShowloginButton(false);
        setShowlogoutButton(true);
   
    setAccount(decoded);
   await addUser(decoded);
     
   
   };

   const onLoginError =(res)=>{
            console.log("login failed",res)
   }

  return (
    <>
      <Dialog  open={true}
            BackdropProps={{style: {backgroundColor: 'unset'}}}
            maxWidth={'md'}
            PaperProps={{ sx: dialogStyle }}

      >
         <Component>
          <Container>
                  <Tittle>To use WhatsApp on your computer: </Tittle>
                  <StyledList>
                    <ListItem>1. Open WhatsApp on your phone</ListItem>
                    <ListItem>2. Tap MENU  settings And Select Whatsapp</ListItem>
                    <ListItem>3. Point your phone at this screen to capture the QR code</ListItem>
                  </StyledList>
          </Container>
          <Box style={{position:"relative"}} >
             <QRCode src={qrCodeImage} alt="QR CODE" />
             <Box style={{ position : 'absolute', top : "50%" , transform:"translateX(25%)"}} >
             { showloginButton ?
                            <GoogleLogin
                                buttonText=""
                                onSuccess={onLoginSuccess}
                                onError={onLoginError}
                            /> : null}
             </Box>
          </Box >
         </Component>
      </Dialog>
    </>
  )
}

export default LoginDialog
 