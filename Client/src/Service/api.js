import axios from "axios";




const url="http://localhost:8000";

export const  addUser= async (data)=>{
 try {
   await  axios.post(`${url}/add`,data);
 } catch (error) {
    console.log("Error while add user to db ", error.message)
 }
}


export const getUsers = async ()=>{
    try {
     let response=    await  axios.get(`${url}/users`);
  
     return response.data;
    } catch (error) {
        console.log("error getuser api", error.message);
    }
}

export const setConversation = async(data)=>{
  try {
    await axios.post(`${url}/Conversation/add`,data);
  } catch (error) {
    console.log("Error While SetCoversation Api", error.message)
  }
}


export const getConversation = async (users) => {
  try {
    const response = await axios.post(`${url}/conversation/get`, users);
    // console.log(response.data);
    return response.data;
} catch (error) {
    console.error('Error while calling getConversation API:', error.response ? error.response.data : error.message);
    throw error;
}
}


export const newMessage = async(data)=>{
  try {
    let response=  await axios.post(`${url}/message/add`, data);
    

  } catch (error) {
    console.log("Error While getCoversation Api", error.message);
    
  }
}

export const getMessages = async(id)=>{
  try {
    let response =    await axios.get(`${url}/message/new/${id}`);
        return response.data;
  } catch (error) {
    console.log("Error While getmessage Api", error.message);
    
  }
}















