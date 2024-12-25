/*const express = require('express');
const router = express.Router();
const Exercise = require('../models/Exercise');

// Get all exercises
router.get('/', async (req, res) => {
  try {
    const exercises = await Exercise.find();
    res.json(exercises);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get one exercise by ID
router.get('/:id', getExercise, (req, res) => {
  res.json(res.exercise);
});

// Create a new exercise
router.post('/', async (req, res) => {
  const exercise = new Exercise({
    name: req.body.name,
    sets: req.body.sets,
    reps: req.body.reps,
    restTime: req.body.restTime,
    image: req.body.image,
  });

  try {
    const newExercise = await exercise.save();
    res.status(201).json(newExercise);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update an exercise
router.patch('/:id', getExercise, async (req, res) => {
  if (req.body.name != null) {
    res.exercise.name = req.body.name;
  }
  if (req.body.sets != null) {
    res.exercise.sets = req.body.sets;
  }
  if (req.body.reps != null) {
    res.exercise.reps = req.body.reps;
  }
  if (req.body.restTime != null) {
    res.exercise.restTime = req.body.restTime;
  }

  if (req.body.image != null) {
    res.exercise.image = req.body.image;
  }

  try {
    const updatedExercise = await res.exercise.save();
    res.json(updatedExercise);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete an exercise
router.delete('/:id', getExercise, async (req, res) => {
  try {
    await res.exercise.remove();
    res.json({ message: 'Deleted Exercise' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Middleware function to get an exercise by ID
async function getExercise(req, res, next) {
  let exercise;
  try {
    exercise = await Exercise.findById(req.params.id);
    if (exercise == null) {
      return res.status(404).json({ message: 'Cannot find exercise' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.exercise = exercise;
  next();
}

module.exports = router;*/


/*const express = require('express');
const router = express.Router();
const Exercise = require('../models/Exercise');

// Create a new exercise
router.post('/', async (req, res) => {
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
});

// Get all exercises
router.get('/', async (req, res) => {
  try {
    const exercises = await Exercise.find();
    res.json(exercises);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;*/

// routes/ExerciseRoutes.js
const express = require('express');
const router = express.Router();
const exerciseController = require('../controllers/ExerciseController');

// Create a new exercise
router.post('/', exerciseController.createExercise);

// Get all exercises
router.get('/', exerciseController.getExercises);

// Get a single exercise by ID
router.get('/:id', exerciseController.getExercise);

// Update an exercise by ID
router.put('/:id', exerciseController.updateExercise);

// Delete an exercise by ID
router.delete('/:id', exerciseController.deleteExercise);

module.exports = router;



