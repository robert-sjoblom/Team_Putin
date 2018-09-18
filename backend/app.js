// @ts-nocheck
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();
// body parser config
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

if (process.env.LOGGING) {
  app.use(morgan('tiny'));
}

// CORS Error Handling
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE');
    return res.status(200).json({});
  }
  next();
});

// REST API Routes
const userRoutes = require('./routes/users.js');
const orderRoutes = require('./routes/orders.js');
const messagesRoutes = require('./routes/messages.js');
const transactionsRoutes = require('./routes/transactions.js');
const notificationRoutes = require('./routes/notifications.js');

app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/messages', messagesRoutes);
app.use('/api/transactions', transactionsRoutes);
app.use('/api/notifications', notificationRoutes);

module.exports = app;
