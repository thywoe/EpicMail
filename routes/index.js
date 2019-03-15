import express from "express";
import messageController from "../controller/messageController";
import bodyParser from "body-parser";
import userController from "../controller/userController";
import { signUpValidator, signInValidator } from "../middleware/middleware";

const router = express.Router();
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false}));

router.post('/api/v1/messages', messageController.createMessage);
router.get('/api/v1/messages', messageController.getAllMessages);
router.get('/api/v1/messages/sent', messageController.getAllSentMessages);
router.get('/api/v1/messages/unread', messageController.getAllUnreadMessages);
router.get('/api/v1/messages/:member_id', messageController.getMessage);
router.delete('/api/v1/messages/:member_id', messageController.deleteMessage);
router.post('/api/v1/auth/signup', signUpValidator, userController.createUser);
router.post('/api/v1/auth/login', signInValidator, userController.loginUser);
export default router;