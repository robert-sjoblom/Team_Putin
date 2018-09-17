const db = require('mongoose');

const ObjectID = db.Schema.Types.ObjectId;

const transactionSchema = new db.Schema({
  _id: ObjectID,
  amount: { type: Number, required: true },
  from: { type: String, required: true },
  status: {
    type: String,
    enum: [
      'delivered',
      'cancelled',
      'shipped'
    ],
    lowercase: true,
    trim: true
  },
  transactionDate: { type: String, required: true }
}, { collection: 'transaction' });

module.exports = db.model('Transaction', transactionSchema);
