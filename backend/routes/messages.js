const route = require('express').Router();
const auth = require('../auth/auth');

const messages = require('../controllers/messagesController');

// Secured routes
route.get('/', auth, messages.getMessages);
route.post('/', auth, messages.addMessage);

module.exports = route;
