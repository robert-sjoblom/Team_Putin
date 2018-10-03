const db = require('mongoose');

const Quote = require('../models/quote');

exports.getQuote = (req, res) => {
  Quote.find()
    .exec()
    .then((quotes) => {
      res.status(200).json({ quotes });
    })
    .catch(err => res.status(500).json({ error: err }));
};

exports.addQuote = (req, res) => {
  const quo = new Quote({
    _id: new db.Types.ObjectId(),
    ...req.body
  });

  quo.save()
    .then(result => res.status(201).json({ message: 'ok', quote: result }))
    .catch(err => res.status(500).json({ error: err }));
};
