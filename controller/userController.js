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
    const token = jwt.sign({id:user._id}, process.env.SECRET, {expiresIn: 86400});
        res.status(200).send({
    	status: 200,
    	data: {
    		token:token
    	}
    });

    }

    loginUser(req, res){

      const email = req.body.email;
        const password = req.body.password;
        const fakeEmail = 'thywo@gmail.com';
        const fakePassword = 'john';

        if (!email || !password) {
          return res.status(400).send({ message: 'All fields are required' });
        }
        if (email !== fakeEmail || password !== fakePassword) {
          return res.status(400).send({ message: 'Username or password is incorrect' });
        }
        if (email === fakeEmail || password === fakePassword) {
      const token = jwt.sign({email:email}, process.env.SECRET, {expiresIn: 86400});
      res.status(200).send({token: token});	
  }

  return '';
}
}

const userController = new UserController();
export default userController;