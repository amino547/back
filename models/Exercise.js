// models/Exercise.js
const mongoose = require('mongoose');

const ExerciseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  sets: { type: Number, required: true },
  reps: { type: Number, required: true },
  restTime: { type: String, required: true },
  image: { type: String, required: true },
});

module.exports = mongoose.model('Exercise', ExerciseSchema);

