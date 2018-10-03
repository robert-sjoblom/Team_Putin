const db = require('mongoose');

const ObjectID = db.Schema.Types.ObjectId;

const quoteSchema = new db.Schema({
  _id: ObjectID,
  message: {
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
  },
}, { collection: 'quotes' });

module.exports = db.model('Quote', quoteSchema);
