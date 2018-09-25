const db = require('mongoose');
const encrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/user');
const config = require('../config');

exports.signUp = (req, res) => {
  const {
    email,
    password,
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
        });

        newUser.save()
          .then((result) => {
            const token = jwt.sign(
              { userId: result._id, email },
              config.private_secret_key,
              { expiresIn: '4h' }
            );
            return res.status(201).json({ message: 'User successfully created.', token });
          })
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
            config.private_secret_key,
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
