const mongoose = require('mongoose');
const { Schema } = mongoose;

const recipientSchema = new Schema({
  recipient: String,
  responded: { type: Boolean, default: 0 },
})

mongoose.model('recipients', recipientSchema);