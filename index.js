require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const keys = require('./configs/keys');
require('./models/User');
require('./models/Candidate');

const app = express();

app.use(cors());
app.use(bodyParser.json());

console.log({ keys });
console.log({ env: process.env.NODE_ENV });

mongoose
  .connect(keys.mongoURI)
  .then(res => {})
  .catch(err => {
    console.log('err', err);
  });

require('./routes/candidateRoutes')(app);
require('./routes/loginRoutes')(app);

if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets like main.js
  app.use(express.static('client/build'));
  // Express will serve up index.html if it does'nt recognize the route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
