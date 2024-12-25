const mongoose = require('mongoose');

const WorkoutPlanSchema = new mongoose.Schema({
  name: String,
  difficulty: String,
  type: String,
  goal: String,
  schedule: [String],
  creationDate: Date,
  isActive: Boolean,
  exercises: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Exercise' }],
});

module.exports = mongoose.model('WorkoutPlan', WorkoutPlanSchema);
