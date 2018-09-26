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
const user = {
  email: 'dsadsa@dsa.com',
  password: 'dsadsa',
};

describe('Activity list API tests', () => {
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

  describe('#GET /activities', () => { //eslint-disable-line
    it('should not get any activities without token', (done) => {
      request.get('api/activities')
        .end(function (err, res) { //eslint-disable-line
          expect(res.status).to.equal(401);
          done();
        });
    });

    it('should get all activities with token', (done) => {
      request.get('api/activities')
        .set('Authorization', token)
        .end(function (err, res) { //eslint-disable-line
          expect(res.status).to.equal(200);
          done();
        });
    });

    it('should have an activities array of length 0', (done) => {
      request.get('api/activities')
        .set('Authorization', token)
        .end(function (err, res) { //eslint-disable-line
          expect(res.body.activities).to.have.length(0);
          expect(res.body.activities).to.be.an('array');
          done();
        });
    });
  });

  describe('#POST /activities', () => { //eslint-disable-line
    it('should respond with 401 when creating an unauthorized Activity', function (done) { //eslint-disable-line
      request.post('api/activities')
        .send(activityToAdd)
        .end(function (err, res) { //eslint-disable-line
          expect(res.status).to.equal(401);
          done();
        });
    });

    it('should respond with 201 when creating a new Activity', function (done) { //eslint-disable-line
      request.post('api/activities')
        .set('Authorization', token)
        .send(activityToAdd)
        .expect(201, done);
    });
  });

  describe('#GET /activities', () => { //eslint-disable-line
    it('should get all the activities', (done) => {
      request.get('api/activities')
        .set('Authorization', token)
        .end(function (err, res) { //eslint-disable-line
          expect(200);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.keys('activities');
          done();
        });
    });

    it('should have an activities array of length 1', (done) => {
      request.get('api/activities')
        .set('Authorization', token)
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
