const route = require('express').Router();
// const authorization = require('../auth/auth');

const transactions = require('../controllers/transactionsController');
const revenue = require('../controllers/transactionsRevenueController');

// Unsecured routes
route.get('/', transactions.getTransactions);
route.get('/getrevenue', revenue.getRevenue);
route.post('/', transactions.makeTransaction);

// Secured routes
// route.get('/', authorization, users.getAllUsers);
// route.get('/:id', authorization, users.getUser);
// route.put('/:id', authorization, users.updateUser);
// route.delete('/:id', authorization, users.removeUser);

module.exports = route;
