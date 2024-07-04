import Conversation from "../model/Conversation.js";


 export const newConversation = async(req,res)=>{
    const { senderId, receiverId } = req.body;

    if (!senderId || !receiverId) {
      return res.status(400).json({ message: 'Invalid senderId or receiverId' });
    }
  
    try {
      let conversation = await Conversation.findOne({
        members: { $all: [senderId, receiverId] }
      });
  
      if (!conversation) {
        // If conversation does not exist, create a new one
        conversation = new Conversation({
          members: [senderId, receiverId],
          message: '' // You can set a default message or handle it as needed
        });
        await conversation.save();
      }
  
      res.json(conversation);
    } catch (error) {
      console.error('Error fetching conversation:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
 }


 export const getConversation = async (req, res) => {
  const { senderId, receiverId } = req.body; // Get parameters from the request body


  // Validate request body
  if (!senderId || !receiverId) {
      return res.status(400).json({ error: 'Sender ID and Receiver ID are required.' });
  }

  try {
      const conversation = await Conversation.findOne({ members: { $all: [senderId, receiverId] } });

      if (!conversation) {
          return res.status(404).json({ message: 'Conversation not found.' });
      }

      res.status(200).json({ status: 'success', data: conversation });
  } catch (error) {
      console.error('Error while fetching conversation:', error);
      res.status(500).json({ status: 'error', message: 'Internal server error', error: error.message });
  }

}