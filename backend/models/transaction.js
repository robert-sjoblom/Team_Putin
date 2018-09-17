const db = require('mongoose');

const ObjectID = db.Schema.Types.ObjectId;

const transactionSchema = new db.Schema({
  _id: ObjectID,
  amount: { type: Number, required: true },
  from: { type: String, required: true },
  status: {
    type: String,
    enum: [
      'completed',
      'awaiting payment',
      'payment expired'
    ],
    lowercase: true,
    trim: true
  },
  transactionDate: { type: Date, default: Date.now }
}, { collection: 'transactions' });

module.exports = db.model('Transaction', transactionSchema);
