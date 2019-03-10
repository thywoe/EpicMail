import app from '../server';
import chai from 'chai';
import chaiHttp from 'chai-http';

chai.use(chaiHttp);
const should = chai.should();

describe("EpicMail Endpoints", () => {
	const message = {
		id: 1,
		createdOn : 2020,
		subject: "Address",
		message: "Hello World",
		parentMessageId: 5,
		status: "read",
		};

    describe("POST /api/v1/messages", () => {
		it("should post a message", (done) => {
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
    
    describe("GET /api/v1/messages", () => {
		it("should get all messages", (done) => {
			chai.request(app)
				.get('/api/v1/messages')
				.end((err, res) => {
					res.should.have.status(200);
					res.body.should.be.a('object');
					done();
					});
		});
    });
    

    describe("GET /api/v1/messages/sent", () => {
		it("should get all sent messages", (done) => {
			chai.request(app)
				.get('/api/v1/messages/sent')
				.end((err, res) => {
					res.should.have.status(200);
					res.body.should.be.a('object');
					done();
					});
		});
	});

	describe("GET /api/v1/messages/unread", () => {
		it("should get all unread messages", (done) => {
			chai.request(app)
				.get('/api/v1/messages/unread')
				.end((err, res) => {
					res.should.have.status(200);
					res.body.should.be.a('object');
					done();
					});
		});
	});

	describe("GET /api/v1/messages/:id", () => {
		it("should get a message by the given id", (done) => {
			const id = message["id"];
			chai.request(app)
				.get(`/api/v1/messages/${id}`)
				.end((err, res) => {
					res.should.have.status(200);
					res.body.should.be.a('object');
					done();
					});
		});
	});

	describe("DELETE /api/v1/messages/:id", () => {
		it("should delete a message by the given id", (done) => {
			const id = message["id"];
			chai.request(app)
				.delete(`/api/v1/messages/${id}`)
				.end((err, res) => {
					res.should.have.status(200);
					res.body.should.be.a('object');
					done();
					});
		});
	});


});