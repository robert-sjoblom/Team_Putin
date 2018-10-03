const route = require('express').Router();
const auth = require('../auth/auth');

const orders = require('../controllers/ordersController');
const average = require('../controllers/averageController');

// GET
route.get('/getOrdersLength', auth, orders.getOrdersLength);
route.get('/getYearlyIncomes', auth, orders.getYearlyIncomes);
route.get('/getOrderValue', auth, average.getOrderValue);

// POST
route.post('/getSpecificOrders', auth, orders.getSpecificOrders);
route.post('/', auth, orders.placeOrder);

module.exports = route;
