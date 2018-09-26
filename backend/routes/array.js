const route = require('express').Router();
const auth = require('../auth/auth');

const array = require('../controllers/arrayController');

// Unsecured routes
route.get('/', auth, array.getArray);

// Secured routes
// route.get('/', authorization, users.getAllUsers);
// route.get('/:id', authorization, users.getUser);
// route.put('/:id', authorization, users.updateUser);
// route.delete('/:id', authorization, users.removeUser);

module.exports = route;
