const db = require('mongoose');

const Transaction = require('../models/transaction');
const Notification = require('../models/notification');

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
    .then(() => res.status(201).json({ message: 'New Transcation Made' }))
    .then(() => {
      const newNote = new Notification({
        _id: new db.Types.ObjectId(),
        status: 'bg-success',
        type: 'mdi-martini',
        message: 'Transaction Created',
        messageDummy: 'Transaction successfully created'
      });
      newNote
        .save();
    })
    .catch(error => res.status(500).json({ message: error }));
};

exports.getTransactions = (req, res) => {
  Transaction
    .find()
    .exec()
    .then(transaction => res.status(200).json({ notes: [transaction] }))
    .catch(err => res.status(500).json({ error: err }));
};
