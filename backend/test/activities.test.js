// @ts-nocheck
/* global describe, before, it, after */
const http = require('http');
const db = require('mongoose');
const request = require('supertest')('http://localhost:3001/');
const chai = require('chai');
const app = require('../app');

const { expect } = chai;
const config = require('../config');

const activityToAdd = {
  description: 'This is a test activity.'
};

describe('Activity list API tests', () => {
  // COPY BEFORE + let listener FOR YOUR OWN TESTS
  let listener;
  before((done) => {
    // Node JS Web Server
    listener = http.createServer(app).listen(config.port, () => {
      console.log(`Node JS API Server Online on ${config.port}`);
    });
    // MongoDB Connection
    db.connect(config.db, { useNewUrlParser: true })
      .then(() => {
        console.log(`MongoDB Connection to ${config.db} Online`);
        done();
      })
      .catch(err => console.log(err));
    db.set('useCreateIndex', true);
  });

  describe('#GET /activities', () => { //eslint-disable-line
    it('should get all the activities', (done) => {
      request.get('api/activities')
        .end(function (err, res) { //eslint-disable-line
          expect(200);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.keys('activities');
          done();
        });
    });

    it('should have an activities array of length 0', (done) => {
      request.get('api/activities')
        .end(function (err, res) { //eslint-disable-line
          expect(res.body.activities).to.have.length(0);
          expect(res.body.activities).to.be.an('array');
          done();
        });
    });
  });

  describe('#POST /activities', () => { //eslint-disable-line
    it('should respond with 201 when creating a new Activity', function (done) { //eslint-disable-line
      request.post('api/activities')
        .send(activityToAdd)
        .expect(201, done);
    });
  });

  describe('#GET /activities', () => { //eslint-disable-line
    it('should get all the activities', (done) => {
      request.get('api/activities')
        .end(function (err, res) { //eslint-disable-line
          expect(200);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.keys('activities');
          done();
        });
    });

    it('should have an activities array of length 1', (done) => {
      request.get('api/activities')
        .end(function (err, res) { //eslint-disable-line
          expect(res.body.activities).to.have.length(1);
          expect(res.body.activities).to.be.an('array');
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
