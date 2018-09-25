const route = require('express').Router();
// const authorization = require('../auth/auth');

const quotes = require('../controllers/quotesController');

// Unsecured routes
route.post('/', quotes.addQuote);

module.exports = route;
