// @ts-nocheck
const http = require('http');
const db = require('mongoose');
const app = require('./app.js');

const port = process.env.SERVER_PORT || 3000;

// Node JS Web Server
http.createServer(app).listen(port, () => console.log(`Node JS API Server Online on ${port}`));

// MongoDB Connection
db.connect(process.env.MONGO_DB_CONNECTIONSTRING, { useNewUrlParser: true })
  .then(() => console.log(`MongoDB Connection to ${process.env.MONGO_DB_CONNECTIONSTRING} Online`))
  .catch(err => console.log(err));

db.set('useCreateIndex', true);
