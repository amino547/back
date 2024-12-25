const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  mobile: { type: String, required: true },
  age: { type: Number, required: true },
  package: { type:String, required: true },
  packageAmount: { type: Number, required: true },
  packageTaken: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  profilePic: { type: String, required: true },
  joined: { type: String, required: true },
  trainer: { type: String, required: true }
});

module.exports = mongoose.model('Member', memberSchema);
