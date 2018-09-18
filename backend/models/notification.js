const db = require('mongoose');

const ObjectID = db.Schema.Types.ObjectId;

const notificationSchema = new db.Schema({
  _id: ObjectID,
  notificationDate: { type: Date, default: Date.now },
  status: { type: String },
  type: { type: String },
  message: { type: String },
  messageDummy: { type: String }
}, { collection: 'notifications' });

module.exports = db.model('Notification', notificationSchema);
