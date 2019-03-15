import jwt from "jsonwebtoken";
import mail from "../dummy/db";



class UserController {
	createUser(req, res) {
    const user = {
    email: req.body.email,
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		password: req.body.password
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

    loginUser(req, res){
      const user = mail["users"].find(user => user.email === req.body.email);
		if(!user){
      return res.status(404).send({
        status: 404,
        error: "email not found"});
      };
		const passwordIsValid = mail["users"].find(user => user.password === req.body.password);
		if(!passwordIsValid){
      return res.status(401).send({
        status: 'error',
        error: "password is invalid"});};
		const token = jwt.sign({id:user._id}, process.env.SECRET, {expiresIn: 86400});
		res.status(200).send({
      status: "successful",
      token: token});
}
}

const userController = new UserController();
export default userController;