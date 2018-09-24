// @ts-nocheck
/* global describe, before, it, after */
const http = require('http');
const db = require('mongoose');
const request = require('supertest')('http://localhost:3001/');
const chai = require('chai');
const app = require('../app');

const { expect } = chai;
const config = require('../config');

const user = {
  email: 'dsadsa@dsa.com',
  password: 'dsadsa',
};

describe('User API tests', () => {
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

  it("Should report status 201 when creating new User that doesn't exist", function (done) { //eslint-disable-line
    request.post('api/users/signup')
      .send(user)
      .expect(201, done);
  });

  it("Should report status 400 when creating a User that already exist", function (done) { //eslint-disable-line
    request.post('api/users/signup')
      .send(user) // this one exists now
      .expect(400, done);
  });

  it("Should report status 200 when logging in a User with correct credentials", function (done) { //eslint-disable-line
    request.post('api/users/login')
      .send(user)
      .end(function (err, res) { //eslint-disable-line
        expect(200);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.keys('message', 'token');
        done();
      });
  });

  it("Should report status 401 when logging in a User with incorrect credentials", function (done) { //eslint-disable-line
    request.post('api/users/login')
      .send({ email: 'something@something.com' })
      .end(function (err, res) { //eslint-disable-line
        expect(401);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.key('message');
        done();
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
