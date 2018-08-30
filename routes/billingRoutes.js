const keys = require('../configs/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
module.exports = app => {
  app.post('/api/stripe', (req, res) => {
    console.log(req.body);
  })
};