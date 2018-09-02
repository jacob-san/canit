module.exports = (req, res, next) => {
    if(req.user.credits < 1) {
      return res.send(403).send({ error: 'Not enough Credits'});
    }
    next();
  }