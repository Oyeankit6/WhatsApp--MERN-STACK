import React, { useState , useContext } from 'react'
import {useEffect} from 'react'
import { getUsers } from '../Service/api';
import { Box  , styled , Divider} from '@mui/material';
import Chats from './Chats';
import { AccountContext } from "../Context/AccountProvider.jsx"
import { getConversation } from "../Service/api.js"




const Component = styled(Box)`
  height:81vh;
  overflow:overlay;
`;

const StyledDivider = styled(Divider)`
margin: 0 0 0 70px;
background-color:#e9edef;
opacity:.6;
`


const Conversations = ({ text}) => {

    const [ users , setUsers ] = useState([]);

    const {account , person , setCid , socket , setActiveUsers} = useContext(AccountContext);

    

    useEffect(() => {
      const getConversationMessage = async() => {
         
          const response = await getConversation({ senderId: account.sub, receiverId: person.sub });
          
          setCid(response.data._id);
            
             
      }
      getConversationMessage();
  }, []);
  
     useEffect(()=>{
        const fetchData= async()=>{
           let response= await getUsers();
           const filteredData =  response.filter(user=>user.name.toLowerCase().includes(text.toLowerCase()));
           setUsers(filteredData);
        }
        fetchData();
     },[text]);


     useEffect(()=>{
        socket.current.emit("addUsers",account);
        socket.current.on("getUsers", users=>{
          setActiveUsers(users);
        })
     },[account]);


  return (
   <Component>{
    users.map( user=>(
      user.sub !== account.sub &&
      <>
      <Chats user={user}/>
      
      <StyledDivider  />
      </>
      
    ))
    
    }</Component>
  )
}

export default Conversations




