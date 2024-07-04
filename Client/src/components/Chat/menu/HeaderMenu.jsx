import React, { useState ,useContext} from 'react'
import {MoreVert} from '@mui/icons-material'
import { Menu ,MenuItem , styled}  from '@mui/material'
import InfoDrawer from "../../drawer/InfoDrawer"
import { AccountContext } from '../../../Context/AccountProvider'



const MenuOption= styled(MenuItem)`
 font-size:14px;
 padding: 15px 60px 5px 24px;
 color: #4A4A4A;

`
const HeaderMenu = ({setOpenDrawer}) => {

    const [ open ,setOpen ] = useState(null);
   
    const { setAccount, setShowloginButton, showlogoutButton, setShowlogoutButton } = useContext(AccountContext);
   

    const handleClose=()=>{
        setOpen(false)
    }

     const handleClick = (e) =>{
          setOpen(e.currentTarget)
     }

     const onSignoutSuccess = () => {
      alert("You have been logged out successfully");
      console.clear();
      setShowlogoutButton(false);
      setShowloginButton(true);
      setAccount('');
      setPerson({});
  };

  const toggleDrawer = () => {
    setOpenDrawer(true);
}

  return (
   <>
        <MoreVert onClick={handleClick}/>
      <Menu
        
        anchorEl={open}
        open={open}
        keepMounted
        onClose={handleClose}
        getContentAnchorE1={null}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuOption onClick={()=>{handleClose(); toggleDrawer()}}>Profile</MenuOption>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
      
      </>
  )
}

export default HeaderMenu;
