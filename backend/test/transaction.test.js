// @ts-nocheck
/* global describe, before, it, after */
/* eslint-disable */
// KOOF testing
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


describe('Transaction API Test', () => {
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
      .end(function (err, res) {
        token = res.body.token; 
        done();
      });
  });
  

  describe('Get transactions', () => {
    it('get all transactions', (done) => {
      request.get('api/transactions')
        .set('Authorization', token)
        .end(function(err, res){
            expect(res.status).to.equal(200);
            expect(res.body).to.be.an('object'); 
            done(); 
        });
    });
  });
  describe('Should be able to post transaction', () => {
      it('should post a transaction', (done) => {
        request.post('api/transactions')
            .set('Authorization', token)
            .send({ from: 'Koof', amount: '300', status: 'completed' })
            .end(function(err, res){
                expect(res.status).to.equal(201);
                done();
            })
      })
  })
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
