const route = require('express').Router();
// const authorization = require('../auth/auth');

const notifications = require('../controllers/notificationsController');

// Unsecured routes
route.get('/', notifications.getNotifications);

// Secured routes
// route.get('/', authorization, users.getAllUsers);
// route.get('/:id', authorization, users.getUser);
// route.put('/:id', authorization, users.updateUser);
// route.delete('/:id', authorization, users.removeUser);

module.exports = route;
