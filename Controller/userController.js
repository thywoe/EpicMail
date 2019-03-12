import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import mail from "../Model/db";


class UserController {
	createUser(req, res) {
		if (!req.body.email) {
      return res.status(400).send({
        status: 400,
        error: 'field is required',
      });
    }
    const hashedPassword = bcrypt.hashSync(req.body.password, 10);
    const user = {
    	id: req.body.id,
    	email: req.body.email,
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		password: hashedPassword
    };
    mail["users"].push(user);
    const token = jwt.sign({id:user._id}, process.env.SECRET, {expiresIn: 86400});
        res.status(200).send({
    	status: 200,
    	data: {
    		token:token
    	}
    });

    }
}

const userController = new UserController();
export default userController;