const mongoose = require('mongoose');
const { Schema } = mongoose;

const postSchema = new Schema({
  title: String,
  subject: String
})

mongoose.model('posts', postSchema);