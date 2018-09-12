const db = require('mongoose');
const encrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/user');

// User Functions


// User Functions

exports.signUp = (req, res) => {
  const {
    email,
    password,
    firstname,
    lastname
  } = req.body;

  User.find({ email })
    .exec()
    .then((user) => {
      if (user.length > 0) {
        return res.status(400).json({ message: 'User with that email already exists.' });
      }

      encrypt.hash(password, 10, (err, hash) => {
        if (err) {
          return res.status(500).json({ error: err });
        }
        const newUser = new User({
          _id: new db.Types.ObjectId(),
          email,
          password: hash,
          firstname,
          lastname
        });

        newUser.save()
          .then(() => res.status(201).json({ message: 'User successfully created.' }))
          .catch(innerErr => res.status(500).json({ error: innerErr }));
      });
    })
    .catch(err => res.status(500).json({ error: err }));
};

exports.login = (req, res) => {
  const { email, password } = req.body;

  User.find({ email })
    .exec()
    .then((user) => {
      if (user.length === 0) {
        return res.status(401).json({ message: 'Email or password is incorrect.' });
      }

      encrypt.compare(password, user[0].password, (err, result) => {
        if (err) {
          return res.status(401).json({ message: 'Email or password is incorrect.' });
        }
        if (result) {
          const token = jwt.sign(
            { userId: user[0]._id, email },
            process.env.PRIVATE_SECRET_KEY,
            { expiresIn: '1h' }
          );
          return res.status(200).json({
            message: 'Authentication was successful.',
            token
          });
        }

        return res.status(401).json({ message: 'Email or password is incorrect.' });
      });
    })
    .catch(err => res.status(500).json({ error: err }));
};

exports.getAllUsers = (req, res) => {
  User.find()
    .exec()
    .then((users) => {
      res.status(200).json({ users });
    })
    .catch(err => res.status(500).json({ error: err }));
};

exports.getUser = (req, res) => {
  const { id } = req.params;
  User.find({ _id: id })
    .exec()
    .then((user) => {
      res.status(200).json({ user });
    })
    .catch(err => res.status(500).json({ error: err }));
};

exports.removeUser = (req, res) => {
  const { id } = req.params;
  User.deleteOne({ _id: id })
    .exec()
    .then(() => {
      res.status(200).json({ message: 'ok' });
    })
    .catch(err => res.status(500).json({ error: err }));
};

exports.updateUser = (req, res) => {

  /*
  const { id } = req.params;
  const { firstname, lastname, email, password } = req.body;


  User.updateOne({ _id: id }, { $set: { firstname, lastname, email,  } })
    .exec()
    .then((user) => {
      res.status(200).json({ user });
    })
    .catch(err => res.status(500).json({ error: err }));
  */
};
