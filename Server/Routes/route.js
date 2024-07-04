import express from 'express'
import  {addUser ,getUsers} from "../Controler/user-controler.js"
import { newConversation } from '../Controler/Conversation-Controller.js';
import {getConversation } from "../Controler/Conversation-Controller.js"
import { getMessages, newMessage } from '../Controler/message-controler.js';



const route = express.Router();




route.post('/add',addUser);
route.get("/users",getUsers);

route.post("/Conversation/add" , newConversation);
route.post("/Conversation/get" , getConversation);


route.post("/message/add" , newMessage);
route.get("/message/new/:id", getMessages);






export default route;