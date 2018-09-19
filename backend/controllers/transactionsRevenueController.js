const db = require('mongoose');

const Transaction = require('../models/transaction');

exports.getRevenue = (req, res) => {
    var query = { status: 'completed' };
    Transaction
        .find(query)
        .exec()
        .then(Transactions => {
           res.status(200).json(Transactions.reduce((sum, item) => sum + item.amount, 0))
        })
        .catch(err => res.status(500).json({ error:err }));  
};