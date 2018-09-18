// @ts-nocheck
const http = require('http');
const db = require('mongoose');
const app = require('./app.js');

const config = require('./config');

function server(arg) {
  const listener = http.createServer(app);
  // Node JS Web Server
  listener.listen(config.port, () => {
    console.log(`Node JS API Server Online on ${config.port}`);
    if (arg) { arg(); }
  });
  // MongoDB Connection
  db.connect(config.db, { useNewUrlParser: true })
    .then(() => {
      console.log(`MongoDB Connection to ${config.db} Online`);
    })
    .catch(err => console.log(err));
  db.set('useCreateIndex', true);
}

server();
module.exports = server;
