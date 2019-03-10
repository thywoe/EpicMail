import express from "express";
import messageController from "../Controller/messageController";
import bodyParser from "body-parser";

const router = express.Router();
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false}));

router.post('/api/v1/messages', messageController.createMessage);
router.get('/api/v1/messages', messageController.getAllMessages);

export default router;