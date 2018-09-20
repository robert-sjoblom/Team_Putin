const db = require('mongoose');

const ObjectID = db.Schema.Types.ObjectId;

const userSchema = new db.Schema({
  _id: ObjectID,
  email: {
    type: String,
    required: true,
    unique: true,
    match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
  },
  password: { type: String, required: true },
  created: { type: Date, default: Date.now },
  modified: { type: Date, default: Date.now }
}, { collection: 'Users' });

module.exports = db.model('User', userSchema);
