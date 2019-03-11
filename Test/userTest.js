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
	});


});