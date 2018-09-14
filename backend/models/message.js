const db = require('mongoose');

const ObjectID = db.Schema.Types.ObjectId;

const messageSchema = new db.Schema({
  _id: ObjectID,
  sender: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  receivedAtTime: {
    type: String,
    required: true
  }
}, { collection: 'messages' });

module.exports = db.model('Message', messageSchema);
