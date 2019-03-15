import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import mail from "../dummy/db";


class UserController {
	createUser(req, res) {
		if (!req.body.email) {
      return res.status(400).send({
        status: 400,
        error: 'Email field is required',
      });
    }
    if (!req.body.password) {
      return res.status(400).send({
        status: 400,
        error: 'Password field is required',
      });
    }
    // const hashedPassword = bcrypt.hashSync(req.body.password, 10);
    const user = {
    	id: req.body.id,
    	email: req.body.email,
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		password: req.body.password
    };
    mail["users"].push(user);
    const token = jwt.sign({id:user_id}, process.env.SECRET, {expiresIn: 86400});
        res.status(200).send({
    	status: 200,
    	data: {
    		token:token
    	}
    });

    }

    loginUser(req, res){
      const user = mail["users"].find(user => user.email === req.body.email);
		if(!user){return res.status(404).send("user not found")};
		const passwordIsValid = mail["users"].find(user => user.password === req.body.password);
		if(!passwordIsValid){return res.status(401).send("password is invalid")};
		const token = jwt.sign({id:user_id}, secret.SECRET, {expiresIn: 86400});
		res.status(200).send({token: token});	
}
}

const userController = new UserController();
export default userController;