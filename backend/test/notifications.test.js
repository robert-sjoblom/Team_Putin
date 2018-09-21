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


describe('Transaction API Test', () => {
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
  describe('get all notifications', () => {
      it('should get all notifications', (done) => {
          request.get('api/notifications')
            .end(function(err,res) {
                expect(200)
                expect(res.body).to.be.an('object'); 
                done();
            })
      })
  })
  describe('GET notifications', () => {
      it('should be an object', (done) => {
          request.get('api/notifications')
            .end(function(err, res){
                expect(200)
                expect(res.body).to.be.an('object')
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
