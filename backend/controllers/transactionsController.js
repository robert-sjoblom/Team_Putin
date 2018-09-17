const db = require('mongoose');

const Transaction = require('../models/transaction');

exports.makeTransaction = (req, res) => {
  const {
    from,
    amount,
    status
  } = req.body;
  const incomingTransaction = new Transaction({
    _id: new db.Types.ObjectId(),
    from,
    amount,
    status
  });
  incomingTransaction
    .save()
    .then(() => res.status(201).json({ message: 'New Transcation Made' }));
};

exports.getTransactions = (req, res) => {
  Transaction
    .find()
    .exec()
    .then(transaction => res.status(200).json({ transaction }))
    .catch(err => res.status(500).json({ error: err }));
};
