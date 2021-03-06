const db = require('mongoose');

const Activity = require('../models/activity');

exports.getActivities = (req, res) => {
  Activity.find()
    .exec()
    .then((activities) => {
      const formattedActivities = activities.map(({ _id, description, date }) => {
        // we want formatted dates
        const month = date.toLocaleString('en-us', { month: 'short' });
        return {
          _id,
          description,
          date: `${month} ${date.getDate()}`
        };
      });
      res.status(200).json({ activities: formattedActivities });
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
