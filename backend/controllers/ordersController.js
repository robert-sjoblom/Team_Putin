const db = require('mongoose');

const Order = require('../models/order');
const Notification = require('../models/notification');

exports.getOrdersLength = (req, res) => {
  Order.find()
    .exec()
    .then(orders => res.status(200).json({ length: orders.length }))
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
  incomingOrder
    .save()
    .then(() => res.status(201).json({ message: 'New order placed!' }))
    .then(() => {
      const newNote = new Notification({
        _id: new db.Types.ObjectId(),
        status: 'bg-primary',
        type: 'mdi-cart-outline',
        message: 'Order Created',
        messageDummy: 'Order successfully created'
      });
      newNote
        .save();
    })
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

exports.getYearlyIncomes = (req, res) => {
  Order.find()
    .exec()
    .then((orders) => {
      const incomes = {
        totalIncome: {},
        inStore: {},
        download: {},
        mailOrder: {}
      };

      orders.forEach(({ orderValue, orderType, orderDate }) => {
        const year = orderDate.getFullYear();

        // Create year if not exist
        if (!(year in incomes.totalIncome)) {
          incomes.totalIncome[year] = 0;
          incomes.inStore[year] = 0;
          incomes.download[year] = 0;
          incomes.mailOrder[year] = 0;
        }

        // Total income
        incomes.totalIncome[year] += orderValue;

        // Specific types
        if (orderType === 'in-store') {
          incomes.inStore[year] += orderValue;
        } else if (orderType === 'download') {
          incomes.download[year] += orderValue;
        } else if (orderType === 'mail-order') {
          incomes.mailOrder[year] += orderValue;
        }
      });

      // Sort by year
      Object.keys(incomes).forEach((incomeKey) => {
        const unordered = incomes[incomeKey];
        Object.keys(unordered).sort().forEach((key) => {
          incomes[incomeKey][key] = unordered[key];
        });
      });
      res.status(200).json({ incomes });
    })
    .catch(err => res.status(500).json({ error: err }));
};
