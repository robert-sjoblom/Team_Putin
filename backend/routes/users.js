const route = require('express').Router();
const authorization = require('../auth/auth');

const users = require('../controllers/usersController.js');

// Unsecured routes
route.post('/signup', users.signUp);
route.post('/login', users.login);

// Secured routes
// route.get('/', authorization, users.getAllUsers);
// route.get('/:id', authorization, users.getUser);
// route.put('/:id', authorization, users.updateUser);
// route.delete('/:id', authorization, users.removeUser);

module.exports = route;
