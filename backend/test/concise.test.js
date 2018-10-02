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

describe('Orders API Test', () => {
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
    
    describe('Get orders length', () => {
        it('get all orders', (done) => {
          request.get('api/orders/getOrdersLength')
            .set('Authorization', token)
            .end(function(err, res){
                expect(res.status).to.equal(200);
                expect(res.body).to.be.an('object'); 
                expect(res.body).not.to.be.a('null');
                done(); 
            });
        });
      });


      describe('Get revenue', () => {
        it('get revenue total', (done) => {
          request.get('api/transactions/getRevenue')
            .set('Authorization', token)
            .end(function(err, res){
                expect(res.status).to.equal(200);
                expect(res.body).to.be.a('number'); 
                expect(res.body).not.to.be.a('null');
                done(); 
            });
        });
      });


      describe('Get orders average', () => {
        it('get average of all orders', (done) => {
          request.get('api/orders/getOrderValue')
            .set('Authorization', token)
            .end(function(err, res){
                expect(res.status).to.equal(200);
                expect(res.body).to.be.an('object'); 
                expect(res.body).not.to.be.a('null');
                done(); 
            });
        });
      });



      describe('Should be able to post a specific status to filter by', () => {
        it('posts status: Delivered to fetch specific orders', (done) => {
          request.post('api/orders/getSpecificOrders', {
            status: ['Delivered']
        })
            .set('Authorization', token)
            .send({_id: 1,
                status: 'Delivered',
                orderNr: 1,
                orderDate: Date(),
                orderValue: 12,
                orderType: 'In-store'
              })
            .send({_id: 2,
                status: 'Shipped',
                orderNr: 2,
                orderDate: Date(),
                orderValue: 15,
                orderType: 'Download'
              })
            .end(function(err, res){
                expect(res.status).to.equal(200);
                expect(res.body).to.be.an('object'); 
                expect(res.body.status).not.to.be.equal('Shipped');
                done(); 
            });
        });
      });

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
