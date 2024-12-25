/*const mongoose = require('mongoose');

const WorkoutSchema = new mongoose.Schema({
  name: { type: String, required: true },
  difficulty: { type: String, required: true },
  type: { type: String, required: true },
  goal: { type: String, required: true },
  schedule: { type: [String], required: true },
  creationDate: { type: Date, default: Date.now },
  exercises: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Exercise' }],
});

const Workout = mongoose.model('Workout', WorkoutSchema);

module.exports = Workout;*/


// models/workoutModel.js
const mongoose = require('mongoose');

const WorkoutSchema = new mongoose.Schema({
  name: { type: String, required: true },
  difficulty: { type: String, required: true },
  type: { type: String, required: true },
  goal: { type: String, required: true },
  schedule: { type: [String], required: true },
  imageUrl: { type: String, required: true },
  creationDate: { type: Date, default: Date.now },
  exercises: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Exercise' }],
});

const Workout = mongoose.model('Workout', WorkoutSchema);

module.exports = Workout;
