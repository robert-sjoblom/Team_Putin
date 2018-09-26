const route = require('express').Router();
const auth = require('../auth/auth');
// const authorization = require('../auth/auth');

const notifications = require('../controllers/notificationsController');

// Unsecured routes
route.get('/', auth, notifications.getNotifications);

// Secured routes
// route.get('/', authorization, users.getAllUsers);
// route.get('/:id', authorization, users.getUser);
// route.put('/:id', authorization, users.updateUser);
// route.delete('/:id', authorization, users.removeUser);

module.exports = route;
