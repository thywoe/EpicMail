import express from "express";
import messageController from "../Controller/messageController";
import bodyParser from "body-parser";
import userController from "../Controller/userController";

const router = express.Router();
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false}));

router.post('/api/v1/messages', messageController.createMessage);
router.get('/api/v1/messages', messageController.getAllMessages);
router.get('/api/v1/messages/sent', messageController.getAllMessages);
router.get('/api/v1/messages/unread', messageController.getAllMessages);
router.get('/api/v1/messages/:member_id', messageController.getMessage);
router.delete('/api/v1/messages/:member_id', messageController.deleteMessage);
router.post('/api/v1/auth/signup', userController.createUser);
export default router;