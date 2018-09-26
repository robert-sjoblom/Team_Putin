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

describe('Quote function API tests', () => {
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

  describe('#GET /quotes', () => { //eslint-disable-line
    it('should not get any quotes without token', (done) => {
      request.get('api/quotes')
        .end(function (err, res) { //eslint-disable-line
          expect(res.status).to.equal(401);
          done();
        });
    });

    it('should get a quote with token', (done) => {
      request.get('api/quotes')
        .set('Authorization', token)
        .end(function (err, res) { //eslint-disable-line
          expect(res.status).to.equal(200);
          done();
        });
    });

    it('should have a key named quote', (done) => {
      request.get('api/quotes')
        .set('Authorization', token)
        .end(function (err, res) { //eslint-disable-line
          expect(res.body).to.have.key('quote');
          done();
        });
    });

    it('quote should be an object', (done) => {
      request.get('api/quotes')
        .set('Authorization', token)
        .end(function (err, res) { //eslint-disable-line 
          expect(res.body.quote).to.be.an('object');
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
