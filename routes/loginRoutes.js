const _ = require('lodash');
const Path = require('path-parser').default;
const { URL } = require('url');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
// const requireLogin = require('../middlewares/requireLogin');

const User = mongoose.model('users');

const hashPasswd = plaintext => {
  const saltRounds = 2;
  return new Promise((resolve, reject) => {
    bcrypt.hash(plaintext, saltRounds, function(err, hash) {
      if (!err) {
        console.log({ hash });
        return resolve(hash);
      }
      console.log({ err });
      reject(err);
    });
  });
};

module.exports = function(app) {
  app.post('/api/user', async (req, res) => {
    console.log({ req: req.body });
    const { userName, password, name } = req.body;
    const hashPwd = await hashPasswd(password);
    const user = new User({
      userName,
      password: hashPwd,
      name
    });

    try {
      const usr = await user.save();
      res.send(usr);
    } catch (error) {
      console.log({ error });
      res.status(422);
    }
  });
  app.post('/api/login', async (req, res) => {
    console.log({ req: req.body });
    const { userName, password } = req.body;
    const user = await User.findOne({ userName });
    console.log({ user });

    if (!user) {
      res.send(false);
    }
    try {
      const match = await bcrypt.compare(password, user.password);
      res.send(match);
    } catch (error) {
      console.log({ error });
      res.status(422);
    }
  });
};
