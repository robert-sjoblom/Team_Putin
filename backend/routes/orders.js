const route = require('express').Router();
// const authorization = require('../auth/auth');

const orders = require('../controllers/ordersController');
const average = require('../controllers/averageController');

// Unsecured routes
route.get('/getOrdersLength', orders.getOrdersLength);
route.post('/getSpecificOrders', orders.getSpecificOrders);
route.post('/', orders.placeOrder);
route.get('/getOrderValue', average.getOrderValue);

module.exports = route;
