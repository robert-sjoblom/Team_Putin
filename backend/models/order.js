const db = require('mongoose');

const ObjectID = db.Schema.Types.ObjectId;

const orderSchema = new db.Schema({
  _id: ObjectID,
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
  orderNr: { type: Number, required: true },
  orderValue: { type: Number, required: true },
  orderType: {
    type: String,
    enum: [
      'download',
      'mail-order',
      'in-store'
    ],
    lowercase: true,
    trim: true
  },
  orderDate: { type: String, required: true }
}, { collection: 'orders' });

module.exports = db.model('Order', orderSchema);
