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

		it("should not post a message when subject field is empty", (done) => {
			const message = {
				id: 1,
				createdOn : 2020,
				subject: "",
				message: "Hello World",
				parentMessageId: 5,
				status: "read",
				};

			chai.request(app)
				.post(`/api/v1/messages`)
				.send(message)
				.end((err, res) => {
					res.should.have.status(400);
					done();
					});
		});

		it("should not post a message when message field is empty", (done) => {
			const message = {
				id: 1,
				createdOn : 2020,
				subject: "Address",
				message: "",
				parentMessageId: 5,
				status: "read",
				};

			chai.request(app)
				.post(`/api/v1/messages`)
				.send(message)
				.end((err, res) => {
					res.should.have.status(400);
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

		it("should not get a message when given a wrong id", (done) => {
			const id = message[2];
			chai.request(app)
				.get(`/api/v1/messages/${id}`)
				.end((err, res) => {
					res.should.have.status(400);
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

		it("should not delete a message when given a wrong member_id", (done) => {
			const id = 4;
			chai.request(app)
				.delete(`/api/v1/messages/${id}`)
				.end((err, res) => {
					res.should.have.status(400);
					res.body.should.be.a('object');
					done();
					});
		});
	});

	describe("GET /", () => {
		it("should return a welcome message", (done) => {
			chai.request(app)
				.get('/')
				.end((err, res) => {
					res.should.have.status(200);
					res.body.should.be.a('object');
					done();
					});
		});
	});
	
	describe("GET wrong url", () => {
		it("should return an error message", (done) => {
			chai.request(app)
				.get('/23e')
				.end((err, res) => {
					res.should.have.status(404);
					done();
					});
		});
    });


});