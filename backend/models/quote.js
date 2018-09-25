const db = require('mongoose');

const ObjectID = db.Schema.Types.ObjectId;

const activitySchema = new db.Schema({
  _id: ObjectID,
  message:
  {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  position: {
    type: String,
    required: true
  }
}, { collection: 'quotes' });

module.exports = db.model('Quote', activitySchema);
