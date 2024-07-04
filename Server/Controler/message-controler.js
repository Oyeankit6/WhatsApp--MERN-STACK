
import Conversation from "../model/Conversation.js";

import Message from "../model/message.js"


export const newMessage = async (req, res) => {
  try {
    const newMessage = new Message(req.body);
    const savedMessage = await newMessage.save();

    await Conversation.findByIdAndUpdate(req.body.conversationId, { message: req.body.text });

    return res.status(200).json(savedMessage);
  } catch (error) {
    console.error("Error saving message:", error);
    return res.status(500).json({ message: error.message });
  }
};

export const getMessages = async (req, res) => {
    try {
        const messages = await Message.find({ conversationId: req.params.id });
        if (!messages) {
          return res.status(404).json({ message: 'Messages not found' });
        }
        res.status(200).json(messages);
      } catch (error) {
        console.error('Error fetching messages:', error);
        res.status(500).json({ message: 'Internal Server Error' });
      }
}


