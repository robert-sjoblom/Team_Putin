const db = require('mongoose');

const Order = require('../models/order');

exports.getOrdersLength = (req, res) => {

  Order.find()
    .exec()
    .then((orders) => {
      return res.status(200).json({ length: orders.length });
    })
    .catch(err => res.status(500).json({ error: err }));
};

exports.placeOrder = (req, res) => {
  const {
    status,
    orderNr,
    orderValue,
    orderType,
    orderDate
  } = req.body;

  const incomingOrder = new Order({
    _id: new db.Types.ObjectId(),
    status,
    orderNr,
    orderValue,
    orderType,
    orderDate
  });
  incomingOrder.save()
    .then(() => res.status(201).json({ message: 'New order placed!' }))
    .catch(err => res.status(500).json({ error: err }));
};

exports.getSpecificOrders = (req, res) => {
  // All available properties
  const keys = [
    'status',
    'orderValue',
    'orderType',
    'fromOrderDate',
    'toOrderDate'
  ];

  // Only include incoming properties which are in available properties
  // Also some formatting before contact with DB
  const orderCriteria = {};
  keys.forEach((key) => {
    if (req.body[key]) {
      if (key === 'fromOrderDate') {
        !('orderDate' in orderCriteria) && (orderCriteria.orderDate = {}); //eslint-disable-line
        orderCriteria.orderDate.$gte = req.body[key];
      } else if (key === 'toOrderDate') {
        !('orderDate' in orderCriteria) && (orderCriteria.orderDate = {}); //eslint-disable-line
        orderCriteria.orderDate.$lt = req.body[key];
      } else {
        orderCriteria[key] = req.body[key];
      }
    }
  });

  Order.find(orderCriteria)
    .exec()
    .then(orders => res.status(200).json({ orders }))
    .catch(err => res.status(500).json({ error: err }));
};
