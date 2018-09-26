/* eslint-disable */
const db = require('mongoose');

const Transaction = require('../models/transaction');

exports.getRevenue = (req, res) => {
    var query = { status: 'completed' };
    Transaction
        .find(query)
        .exec()
        .then(transactions => {
           res.status(200).json(transactions.reduce((sum, item) => sum + item.amount, 0))
        })
        .catch(err => res.status(500).json({ error:err }));
};