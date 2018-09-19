const db = require('mongoose');

const ObjectID = db.Schema.Types.ObjectId;

const activitySchema = new db.Schema({
  _id: ObjectID,
  date: {
    type: Date,
    default: Date.now
  },
  description: {
    type: String,
    required: true
  }
}, { collection: 'activities' });

module.exports = db.model('Activity', activitySchema);
