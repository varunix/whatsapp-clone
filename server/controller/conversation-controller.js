import { response } from "express";
import Conversation from "../model/Conversation.js";

export const newConversation = async (req, res) => {
  try {
    const senderId = req.body.senderId;
    const receiverId = req.body.receiverId;

    const exist = await Conversation.findOne({
      members: { $all: [receiverId, senderId] },
    });

    if (exist) {
      return response.status(200).json("conversation already exists");
    }

    const newConversation = new Conversation({
      members: [receiverId, senderId],
    });

    await newConversation.save();
    return response.status(200).json("Conversation saved successfully");
  } catch (error) {
    return response.status(500).json(error.message);
  }
};
