const db = require('mongoose');

const Message = require('../models/message');

exports.getMessages = (req, res) => {
  Message.find()
    .exec()
    .then((messages) => {
      res.status(200).json({ count: messages.length, messages });
    })
    .catch(err => res.status(500).json({ error: err }));
};

exports.addMessage = (req, res) => {
  const msg = new Message({
    _id: new db.Types.ObjectId(),
    ...req.body
  });

  msg.save()
    .then(result => res.status(201).json({ message: 'ok', msg: result }))
    .catch(err => res.status(500).json({ error: err }));
};
