const route = require('express').Router();
// const authorization = require('../auth/auth');

const transactions = require('../controllers/transactionsController');


// Unsecured routes
route.get('/getrevenue', transactions.getRevenue);


// Secured routes
// route.get('/', authorization, users.getAllUsers);
// route.get('/:id', authorization, users.getUser);
// route.put('/:id', authorization, users.updateUser);
// route.delete('/:id', authorization, users.removeUser);
module.exports = route;