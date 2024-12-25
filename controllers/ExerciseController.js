// controllers/ExerciseController.js
const Exercise = require('../models/Exercise');

// Create a new exercise
exports.createExercise = async (req, res) => {
  const exerciseData = req.body;

  if (!Array.isArray(exerciseData)) {
    return res.status(400).json({ message: 'Invalid data format' });
  }

  try {
    const newExercises = await Exercise.insertMany(exerciseData);
    res.status(201).json(newExercises);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all exercises
exports.getExercises = async (req, res) => {
  try {
    const exercises = await Exercise.find();
    res.json(exercises);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single exercise by ID
exports.getExercise = async (req, res) => {
  try {
    const exercise = await Exercise.findById(req.params.id);
    if (!exercise) return res.status(404).json({ message: 'Exercise not found' });
    res.json(exercise);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update an exercise by ID
exports.updateExercise = async (req, res) => {
  try {
    const exercise = await Exercise.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!exercise) return res.status(404).json({ message: 'Exercise not found' });
    res.json(exercise);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete an exercise by ID
exports.deleteExercise = async (req, res) => {
  try {
    const exercise = await Exercise.findByIdAndDelete(req.params.id);
    if (!exercise) return res.status(404).json({ message: 'Exercise not found' });
    res.json({ message: 'Exercise deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
