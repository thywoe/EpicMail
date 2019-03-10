import express from "express";
import messageController from "../Controller/messageController";
import bodyParser from "body-parser";

const router = express.Router();
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false}));

router.post('/api/v1/messages', messageController.createMessage);
router.get('/api/v1/messages', messageController.getAllMessages);
router.get('/api/v1/messages/sent', messageController.getAllMessages);
router.get('/api/v1/messages/unread', messageController.getAllMessages);
router.get('/api/v1/messages/:id', messageController.getMessage);

export default router;