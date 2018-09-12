const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, process.env.PRIVATE_SECRET_KEY);
    req.user = decoded;
    next();
  } catch (error) {
    console.log(error.stack);
    return res.status(401).json({ message: 'ah ah ah, you didn\'t say the magic word.' });
  }
};
