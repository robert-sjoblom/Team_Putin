const db = require('mongoose');

const Notification = require('../models/notification');

exports.getNotifications = (req, res) => {
  Notification
    .find()
    .exec()
    .then(notes => res.status(200).json({ notes }))
    .catch(err => res.status(500).json({ error: err }));
};
