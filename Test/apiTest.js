import app from '../server';
import chai from 'chai';
import chaiHttp from 'chai-http';

chai.use(chaiHttp);
const should = chai.should();

describe("EpicMail Endpoints", () => {
    describe("POST /api/v1/messages", () => {
		it("should post a message", (done) => {
			const message = {
        		id: 3,
				createdOn : 2020,
				subject: "Address",
				message: "Hello World",
				parentMessageId: 5,
				status: "read",
    };
			chai.request(app)
				.post(`/api/v1/messages`)
				.send(message)
				.end((err, res) => {
					res.should.have.status(200);
					res.body.should.be.a('object');
					done();
					});
		});
	});


});