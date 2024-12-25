const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  gender: { type: String, required: true },
  age: { type: Number, required: true },
  weight: { type: Number, required: true },
  height: { type: Number, required: true },
  unitSystem: { type: String, required: true },
  language: { type: String, required: true },
  startOfWeek: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  avatar: { type: String, default: '/an.jpg' },
  joinedDate: { type: Date, default: Date.now },
  stats: {
    totalWorkouts: { type: Number, default: 0 },
    caloriesBurned: { type: Number, default: 0 },
    averageDuration: { type: String, default: '0 min' },
  },
});

const User = mongoose.models.User || mongoose.model('User', userSchema);

module.exports = User;
