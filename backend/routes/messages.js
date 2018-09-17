const route = require('express').Router();
// const authorization = require('../auth/auth');

const messages = require('../controllers/messagesController');

// Unsecured routes
route.get('/', messages.getMessages);
route.post('/', messages.addMessage);

// Secured routes
// route.get('/', authorization, users.getAllUsers);
// route.get('/:id', authorization, users.getUser);
// route.put('/:id', authorization, users.updateUser);
// route.delete('/:id', authorization, users.removeUser);

module.exports = route;
