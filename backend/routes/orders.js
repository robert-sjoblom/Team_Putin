const route = require('express').Router();
// const authorization = require('../auth/auth');

const orders = require('../controllers/ordersController');

// Unsecured routes
route.get('/getOrdersLength', orders.getOrdersLength);
route.post('/', orders.placeOrder);

// Secured routes
// route.get('/', authorization, users.getAllUsers);
// route.get('/:id', authorization, users.getUser);
// route.put('/:id', authorization, users.updateUser);
// route.delete('/:id', authorization, users.removeUser);
module.exports = route;
