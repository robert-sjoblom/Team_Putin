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

describe('Orders API tests', () => {
  let listener;
  let token;

  // Connect to database
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

  describe('#GET /orders/getYearlyIncomes', () => {
    it('should not get yearly incomes without token', (done) => {
      request.get('api/orders/getYearlyIncomes')
        .end(function (err, res) { //eslint-disable-line
          expect(res.status).to.equal(401);
          done();
        });
    });

    it('should not get yearly incomes with invalid token', (done) => {
      request.get('api/orders/getYearlyIncomes')
        .set('Authorization', 'invalidToken')
        .end(function (err, res) { //eslint-disable-line
          expect(res.status).to.equal(401);
          done();
        });
    });

    it('should get yearly incomes with token', (done) => {
      request.get('api/orders/getYearlyIncomes')
        .set('Authorization', token)
        .end(function (err, res) { //eslint-disable-line
          expect(res.status).to.equal(200);
          done();
        });
    });

    it('should be an object with certatin keys', (done) => {
      request.get('api/orders/getYearlyIncomes')
        .set('Authorization', token)
        .end(function (err, res) { //eslint-disable-line
          expect(res.body.incomes).to.be.an('object');
          expect(Object.keys(res.body.incomes).length).to.equal(4);
          expect(res.body.incomes).to.have.keys('totalIncome', 'inStore', 'download', 'mailOrder');
          done();
        });
    });
  });

  describe('#POST /orders/getSpecificOrders', () => { //eslint-disable-line

    // Insert test data in database
    before((done) => {
      request.post('api/orders')
        .set('Authorization', token)
        .send([
          {
            status: 'delivered',
            orderNr: 4756,
            orderValue: 99,
            orderType: 'download'
          },
          {
            status: 'shipped',
            orderNr: 4757,
            orderValue: 155,
            orderType: 'in-store'
          },
          {
            status: 'cancelled',
            orderNr: 4758,
            orderValue: 79,
            orderType: 'mail-order'
          }
        ])
        .end(function (err, res) { //eslint-disable-line
          if (res.status === 200) {
            console.log('Succesfully put test data in database.');
          } else {
            console.log('Failed putting data in database.');
          }
          done();
        });
    });

    it('should not get orders without token', (done) => {
      request.post('api/orders/getSpecificOrders')
        .end(function (err, res) { //eslint-disable-line
          expect(res.status).to.equal(401);
          done();
        });
    });

    it('should not get orders with invalid token', (done) => {
      request.post('api/orders/getSpecificOrders')
        .set('Authorization', 'invalidToken')
        .end(function (err, res) { //eslint-disable-line
          expect(res.status).to.equal(401);
          done();
        });
    });

    it('should get orders with token', (done) => {
      request.post('api/orders/getSpecificOrders')
        .set('Authorization', token)
        .end(function (err, res) { //eslint-disable-line
          expect(res.status).to.equal(200);
          done();
        });
    });

    it('should get all orders', (done) => {
      request.post('api/orders/getSpecificOrders')
        .set('Authorization', token)
        .end(function (err, res) { //eslint-disable-line
          expect(res.body.orders).to.be.an('array');
          expect(res.body.orders.length).to.equal(3);
          expect(res.body.orders[0]).to.contain.keys('_id', 'status', 'orderNr', 'orderValue', 'orderType', 'orderDate');
          done();
        });
    });

    it('should get specific orders on filter', (done) => {
      request.post('api/orders/getSpecificOrders')
        .set('Authorization', token)
        .send({ orderValue: 155 })
        .end(function (err, res) { //eslint-disable-line
          expect(res.body.orders).to.be.an('array');
          expect(res.body.orders.length).to.equal(1);
          expect(res.body.orders[0].orderValue).to.equal(155);
          done();
        });
    });

    it('should ignore invalid filters', (done) => {
      request.post('api/orders/getSpecificOrders')
        .set('Authorization', token)
        .send({ candyType: 'chocolate' })
        .end(function (err, res) { //eslint-disable-line
          expect(res.body.orders).to.be.an('array');
          expect(res.body.orders.length).to.equal(3);
          done();
        });
    });
  });

  // Disconnect database
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
