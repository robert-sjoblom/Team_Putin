const db = require('mongoose');

const Average = require('../models/order');

exports.getAverage = (req, res) => {
    
    Average
        .find()
        .exec()
        .then(Transactions => {
           res.status(200).json(Transactions.reduce((sum, item) => sum + item.amount, 0))
        })
        .catch(err => res.status(500).json({ error:err }));
};