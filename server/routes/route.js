import express from 'express';
import { addUser, getUsers } from '../controller/user-controller.js';
import { newConversation } from '../controller/conversation-controller.js';
import { getConversation } from '../controller/conversation-controller.js';
import { getMessages, newMessage } from '../controller/message-controller.js';

const route = express.Router();

route.post('/add', addUser);
route.get('/users', getUsers);

route.post('/conversation/add', newConversation);
route.post('/conversation/get', getConversation);

route.post('/message/add', newMessage);
route.get('/message/get/:id', getMessages);

export default route;