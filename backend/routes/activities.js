const route = require('express').Router();
const auth = require('../auth/auth');

const activities = require('../controllers/activitiesController');

// Unsecured routes
route.get('/', auth, activities.getActivities);
route.post('/', auth, activities.addActivity);

// Secured routes
// route.get('/', authorization, users.getAllUsers);
// route.get('/:id', authorization, users.getUser);
// route.put('/:id', authorization, users.updateUser);
// route.delete('/:id', authorization, users.removeUser);

module.exports = route;
