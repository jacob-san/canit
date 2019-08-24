const mongoose = require('mongoose');
const { Schema } = mongoose;

const candidateSchema = new Schema({
  fullName: String,
  gender: String,
  dob: String,
  cityOfResidence: String,
  nationality: String,
  maritalStatus: String,
  major: String,
  degree: String,
  university: String,
  yearsOfExperience: Number,
  employmentStatus: String,
  expectedSalary: Number,
  contactNumber: String,
  email: String,
  visaStatus: String,
  description: String
});

mongoose.model('candidates', candidateSchema);
