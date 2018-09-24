const jwt = require('jsonwebtoken');
const config = require('../config');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const decoded = jwt.verify(token, config.private_secret_key);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'ah ah ah, you didn\'t say the magic word.' });
  }
};
