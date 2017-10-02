const express = require('express');

const env = 'development';

const app = express();
const config = require('./server/config/config')[env];

require('./server/config/express')(app, config);
// app.use(express.static('app'));
require('./server/config/routes')(app);

app.listen(3500);
console.log("Server running on port: 3500");