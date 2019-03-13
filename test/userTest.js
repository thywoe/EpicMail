import app from '../server';
import chai from 'chai';
import chaiHttp from 'chai-http';

chai.use(chaiHttp);
const should = chai.should();

describe("EpicMail Endpoints", () => {
    describe("POST /api/v1/auth/signup", () => {
		it("should create a user account", (done) => {
			 const user = {
    			id: 7,
    			email: "seun@gmail.com",
				firstName: "John",
				lastName: "bola",
				password: "12345"
    			};	
			chai.request(app)
				.post('/api/v1/auth/signup')
				.send(user)
				.end((err, res) => {
					res.should.have.status(200);
					done();
					});
		});

		it("should not create a user account when email field is missing ", (done) => {
			const user = {
			   id: 7,
			   email: "",
			   firstName: "John",
			   lastName: "bola",
			   password: "12345"
   				};	
		   chai.request(app)
			   .post('/api/v1/auth/signup')
			   .send(user)
			   .end((err, res) => {
				   res.should.have.status(400);
				   done();
				   });
	   });

	   it("should not create a user account when password field is missing ", (done) => {
		const user = {
		   id: 7,
		   email: "seun@gmail.com",
		   firstName: "John",
		   lastName: "bola",
		   password: ""
			};	
	   chai.request(app)
		   .post('/api/v1/auth/signup')
		   .send(user)
		   .end((err, res) => {
			   res.should.have.status(400);
			   done();
			   });
   		});
	});

	describe("POST /api/v1/auth/login", () => {
		it("should allow user login", (done) => {
			const user = {
			   email: "admin@yahoo.com",
			   password: "thisisandela",
				};	
		   chai.request(app)
			   .post('/api/v1/auth/login')
			   .send(user)
			   .end((err, res) => {
				   res.should.have.status(200);
				   done();
				   });
			   });

			   it("should not allow user log in when email is not found", (done) => {
				const user = {
				   email: " ",
				   password: "thisisandela",
					};	
			   chai.request(app)
				   .post('/api/v1/auth/login')
				   .send(user)
				   .end((err, res) => {
					   res.should.have.status(404);
					   done();
					   });
				   });

				   it("should not allow user log in when pasword field is invalid", (done) => {
					const user = {
					   email: "admin@yahoo.com",
					   password: " ",
						};	
				   chai.request(app)
					   .post('/api/v1/auth/login')
					   .send(user)
					   .end((err, res) => {
						   res.should.have.status(401);
						   done();
						   });
					   });
		});

});
