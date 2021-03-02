const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

const db = require('./config/db');
const route = require('./routes');

app.use(express.static('src/resources/public'));

db.connect();

route(app);

app.listen(port, () => {
  console.log(`running in ${port}`);
})