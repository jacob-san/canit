const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    userName: String,
    password: String,
    name: String
})

mongoose.model('users', userSchema);