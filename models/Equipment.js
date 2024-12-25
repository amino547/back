const mongoose = require('mongoose');

const equipmentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  unit: { type: String, required: true },
  urlPicture: { type: String, required: true },
  description: { type: String, required: true },
});

module.exports = mongoose.model('Equipment', equipmentSchema);
