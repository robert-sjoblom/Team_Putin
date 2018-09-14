const db = require('mongoose');

const Order = require('../models/order');

exports.getOrdersLength = (req, res) => {

    Order.find()
    .exec()
    .then(orders => {
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
    .then(() => res.status(201).json({ message: 'New order placed!'}))
    .catch(err => res.status(500).json({ error: err }));
};

