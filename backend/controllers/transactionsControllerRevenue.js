const db = require('mongoose');

const Transaction = require('../models/transaction');

exports.getRevenue = (req, res) => {
    var query = { status: 'completed' };
    Transaction
        .find(query)
        .exec()
        .then(Transaction.reduce(function(a,b) {
            return { amount:  +  }
        }) 
        .catch(err => res.status(500).json({ error:err }));  
};

console.log(getRevenue);