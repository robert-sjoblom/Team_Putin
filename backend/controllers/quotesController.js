const db = require('mongoose');

const Quote = require('../models/quote');

exports.getQuote = (req, res) => {
  Quote.findOne()
    .exec()
    .then(quote => res.status(200).json({ quote }))
    .catch(err => res.status(500).json({ error: err }));
};

exports.addQuote = (req, res) => {
  const quote = new Quote({
    _id: new db.Types.ObjectId(),
    ...req.body
  });

  Quote.remove({})
    .exec()
    .then(() => console.log('Quotes was removed!'))
    .catch(err => res.status(500).json({ error: err }));
};
