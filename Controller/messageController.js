import mail from "../Model/db";

class MessageController {

    createMessage(req, res) {
        if (!req.body.subject || !req.body.message) {
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

    getAllMessages(req, res) {
          return res.status(200).send({
            status: 200,
            data: mail["messages"],
          });
        }
        
    getMessage(req, res) {
          const id = parseInt(req.params.id, 10);
          const message = mail["messages"].find(message => message.id === id);
          if(message){return res.status(200).send({
            status: 200,
            data: message
          }
          )};
            return res.status(400).send({
            status: 400,
            error: 'message does not exist',
          });
        }
      




    }
const messageController = new MessageController();
export default messageController;

