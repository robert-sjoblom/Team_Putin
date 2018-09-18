// @ts-nocheck
const http = require('http');
const db = require('mongoose');
const app = require('./app.js');

const config = require('./config');

const server = () => {
  // Node JS Web Server
  http.createServer(app).listen(config.port, () => console.log(`Node JS API Server Online on ${config.port}`));

  // MongoDB Connection
  db.connect(config.db, { useNewUrlParser: true })
    .then(() => console.log(`MongoDB Connection to ${config.db} Online`))
    .catch(err => console.log(err));

  db.set('useCreateIndex', true);
};

server();
module.exports = server;
