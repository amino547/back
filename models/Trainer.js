const mongoose = require('mongoose');

const trainerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  profilePic: { type: String, required: true },
  mobile: { type: String, required: true },
  age: { type: Number, required: true },
  experience: { type: String, required: true },
  salary: { type: Number, required: true },
  joined: { type: String, required: true },
});

module.exports = mongoose.model('Trainer', trainerSchema);
