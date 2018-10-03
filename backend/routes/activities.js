const route = require('express').Router();
const auth = require('../auth/auth');

const activities = require('../controllers/activitiesController');

// Secured routes
route.get('/', auth, activities.getActivities);
route.post('/', auth, activities.addActivity);

module.exports = route;
