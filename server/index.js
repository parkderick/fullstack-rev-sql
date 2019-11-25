// Express Server
// FIX ME :(
  const express = require('express');
  const path = require('path');
  const router = require('./router');
  const db = require('../db')
  const bodyparser = require('body-parser');
  const morgan = require('morgan')


  const server = express();
  
  server.use('/', express.static(path.join(__dirname + '/../client/dist')));
  server.use(bodyparser.json())
  server.use(morgan('dev'))

  server.use('/', router);

  const port = 3000;

  server.listen(port, () => console.log('Connected to port: 3000'))