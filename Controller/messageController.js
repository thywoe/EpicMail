import mail from "../Model/db";

class MessageController {

    createMessage(req, res) {
        if (!req.body.subject && !req.body.message) {
            return res.status(400).send({
              status: 400,
              error: 'All fields are required',
            });
          }      
          const message = {
                  id: req.body.id,
                  createdOn : req.body.createdOn,
                  subject: req.body.subject,
                  message: req.body.message,
                  parentMessageId: req.body.parentMessageId,
                  status: req.body.status,
          }; 
          mail["messages"].push(message);
          return res.status(200).send({
            status: 200,
            data: message,
          });
        }




    }
const messageController = new MessageController();
export default messageController;

