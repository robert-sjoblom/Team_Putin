// @ts-nocheck
/* global describe, before, it, after */
const http = require('http');
const db = require('mongoose');
const request = require('supertest')('http://localhost:3001/');
const chai = require('chai');
const app = require('../app');

const { expect } = chai;
const Message = require('../models/message');
const config = require('../config');

const user = {
  email: 'dsadsa@dsa.com',
  password: 'dsadsa',
};

describe('Messages list API integration tests', () => {
  // COPY BEFORE + let listener FOR YOUR OWN TESTS
  let listener;
  let token;

  before((done) => {
    // Node JS Web Server
    listener = http.createServer(app).listen(config.port, () => {
      console.log(`Node JS API Server Online on ${config.port}`);
    });
    // MongoDB Connection
    db.connect(config.db, { useNewUrlParser: true })
      .then(() => {
        console.log(`MongoDB Connection to ${config.db} Online`);
      })
      .catch(err => console.log(err));
    db.set('useCreateIndex', true);

    request.post('api/users/signup')
      .send(user)
      .end(function (err, res) { //eslint-disable-line
        token = res.body.token; //eslint-disable-line
        done();
      });
  });

  describe('Database Tests', () => {
    describe('Test Database Write', () => {
      it('New message saved to database', function (done) { //eslint-disable-line
        const testMessage = new Message({
          _id: new db.Types.ObjectId(),
          sender: 'Bob',
          message: '123',
          receivedAtTime: '12:00 PM'
        });

        testMessage.save(done);
      });
      it('Try to save incorrect information to db', function (done) { //eslint-disable-line
        // error should trigger
        const errTestMessage = new Message({
          message: '123',
          receivedAtTime: '12:00 PM'
        });

        errTestMessage.save(err => { //eslint-disable-line
          if (err) { return done(); }
          throw new Error('Should generate error!');
        });
      });
      it('Should retrieve data from test database', function (done) { //eslint-disable-line
        // Look up the message previously saved
        Message.find({ sender: 'Bob' }, (err, result) => {
          if (err) { throw (err); }
          if (result.length === 0) { throw new Error('No data!'); }
          done();
        });
      });
    });
  });

  describe('#GET /messages', () => { //eslint-disable-line
    it('should not get any messages without auth', (done) => {
      request.get('api/messages')
        .end(function (err, res) { //eslint-disable-line
          expect(res.status).to.equal(401);
          done();
        });
    });

    it('should get all messages', (done) => {
      request.get('api/messages')
        .set('Authorization', token)
        .end(function (err, res) { //eslint-disable-line
          expect(res.status).to.equal(200);
          done();
        });
    });
    it('should have a message array of length 1', (done) => {
      request.get('api/messages')
        .set('Authorization', token)
        .end(function (err, res) { //eslint-disable-line
          expect(res.body.messages).to.have.length(1);
          expect(res.body.messages).to.be.an('array');
          done();
        });
    });

    it('should have a count key with value 1', (done) => {
      request.get('api/messages')
        .set('Authorization', token)
        .end(function (err, res) { //eslint-disable-line
          expect(res.body.count).to.equal(1);
          done();
        });
    });
  });

  // COPY THIS FOR YOUR OWN TESTS
  after((done) => {
    db.connection.db.dropDatabase(() => {
      db.connection.close(() => {
        console.log('Shut down mongodb connection.');
        listener.close(() => {
          console.log('Shut down server.');
          done();
        });
      });
    });
  });
});

/*
describe('Database Tests', function (done) {
  before(function(done) { //eslint-disable-line
    mongoose.connect('mongodb://localhost:27017/testingWithPutin', { useNewUrlParser: true })
    const db = mongoose.connection;

    db.on('error', console.error.bind(console, 'connection error'));
    db.once('open', function () { //eslint-disable-line
      console.log('We are connected to the test database!');
      done();
    });
  });

  describe('Test Database', function () {
    it('New message saved to database', function (done) {
      const testMessage = new Message({
        _id: new mongoose.Types.ObjectId(),
        sender: 'Bob',
        message: '123',
        receivedAtTime: '12:00 PM'
      })

      testMessage.save(done)
    });

    it('Try to save incorrect information to db', function (done) {
      // error should trigger
      const errTestMessage = new Message({
        message: '123',
        receivedAtTime: '12:00 PM'
      });

      errTestMessage.save(err => {
        if (err) { return done(); }
        throw new Error('Should generate error!');
      });
    });

    it('Should retrieve data from test database', function (done) {
      // Look up the message previously saved
      Message.find({ sender: 'Bob' }, (err, result) => {
        if (err) { throw (err); }
        if (result.length === 0) { throw new Error('No data!'); }
        done();
      });
    });

    // this requires server to be online
    it('Should fetch messages properly', function(done) {
      request.get('/')
        .expect(200, done)
    });

    //drop database and close connection
    after(function(done) {
      mongoose.connection.db.dropDatabase(function() {
        mongoose.connection.close(done);
      });
    });
  });
})
*/


/*
const user_exist = {
  email: "anna.andersson@testdomain.com",
  password: "BytMig123",
  firstname: "Anna",
  lastname: "Andersson"
};

const user_dont_exist = {
  email: "otto.ottosson@testdomain.com",
  password: "BytMig123",
  firstname: "Otto",
  lastname: "Ottosson"
};

describe('Create a new User', function () {

  before(function () {

  });

  it('Should report status 201 when creating new User that don\'t exist', function (done) {
    request.post("/signup")
      .send(user_exist)
      .expect(201, done);
  });

  it('Should report status 400 "Bad Request"
  when trying to create a User that already exist', function (done) {
    request.post("/signup")
      .send(user_exist)
      .expect(400, done);
  });

  after(function () {

  });

});

describe('Logging in the User', function () {

  before(function () {

  });

  it('Should report status 200 when User successfully logged in.', function (done) {
    request.post("/signin")
      .send(user_exist)
      .expect(200, done);
  });

  it('Should report status 401 "Unauthorized" when user dosen\'t exist', function (done) {
    request.post("/signin")
      .send(user_dont_exist)
      .expect(401, done);
  });

  after(function () {

  });

});

*/
