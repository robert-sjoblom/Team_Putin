const route = require('express').Router();
const auth = require('../auth/auth');

const quotes = require('../controllers/quotesController');

// Unsecured routes
route.get('/', auth, quotes.getQuote);
route.post('/', quotes.addQuote);

module.exports = route;
