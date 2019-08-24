const _ = require('lodash');
const Path = require('path-parser').default;
const { URL } = require('url');
const mongoose = require('mongoose');
// const requireLogin = require('../middlewares/requireLogin');

const Candidate = mongoose.model('candidates');

module.exports = function(app) {
  app.get('/api/candidates', async (req, res) => {
    console.log({ req: req.body });

    const candidates = await Candidate.find();
    res.send(candidates);
  });

  app.get('/api/candidates/:candidateId', async (req, res) => {
    const candidate = await Candidate.find({ _id: req.params.candidateId });
    res.send(candidate);
  });

  app.post('/api/candidates', async (req, res) => {
    console.log({ req: req.body });

    const {
      fullName,
      gender,
      cityOfResidence,
      dob,
      nationality,
      maritalStatus,
      major,
      degree,
      university,
      yearsOfExperience,
      employmentStatus,
      expectedSalary,
      contactNumber,
      email,
      visaStatus,
      description
    } = req.body;

    const candidate = new Candidate({
      fullName,
      gender,
      cityOfResidence,
      dob,
      nationality,
      maritalStatus,
      major,
      degree,
      university,
      yearsOfExperience,
      employmentStatus,
      expectedSalary,
      contactNumber,
      email,
      visaStatus,
      description
    });

    try {
      const cand = await candidate.save();
      res.send(cand);
    } catch (error) {
      console.log({ error });

      res.status(422);
    }
  });

  app.put('/api/candidates', async (req, res) => {
    console.log({ req });

    const { id, ...rest } = req.body;

    try {
      const user = await Candidate.findByIdAndUpdate(id, rest);
      res.send(user);
    } catch (error) {
      console.log({ error });

      res.status(422);
    }
  });

  app.delete('/api/candidates/:id', async (req, res) => {
    const candidateId = req.params.id;
    const result = await Candidate.findOneAndDelete({ _id: candidateId });
    res.send('Deleted');
  });
};
