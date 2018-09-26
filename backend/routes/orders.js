const route = require('express').Router();
const auth = require('../auth/auth');

const orders = require('../controllers/ordersController');

// Unsecured routes
route.get('/getOrdersLength', auth, orders.getOrdersLength);
route.get('/getYearlyIncomes', auth, orders.getYearlyIncomes);
route.post('/getSpecificOrders', auth, orders.getSpecificOrders);
route.post('/', auth, orders.placeOrder);

// Secured routes
// route.get('/', authorization, users.getAllUsers);
// route.get('/:id', authorization, users.getUser);
// route.put('/:id', authorization, users.updateUser);
// route.delete('/:id', authorization, users.removeUser);

module.exports = route;
