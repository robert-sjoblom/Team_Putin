const db = require('mongoose');

const Activity = require('../models/activity');

exports.getActivities = (req, res) => {
  Activity.find()
    .exec()
    .then((activities) => {
      res.status(200).json({ count: activities.length, activities });
    })
    .catch(err => res.status(500).json({ error: err }));
};

exports.addActivity = (req, res) => {
  const act = new Activity({
    _id: new db.Types.ObjectId(),
    ...req.body
  });

  act.save()
    .then(result => res.status(201).json({ message: 'ok', activity: result }))
    .catch(err => res.status(500).json({ error: err }));
};
