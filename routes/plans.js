const express = require('express');
const router = express.Router();
const WorkoutPlan = require('../models/WorkoutPlans');

// Get all workout plans
router.get('/', async (req, res) => {
  try {
    const plans = await WorkoutPlan.find().populate('exercises');
    res.json(plans);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get one workout plan by ID
router.get('/:id', getPlan, (req, res) => {
  res.json(res.plan);
});

// Create a new workout plan
router.post('/', async (req, res) => {
  const plan = new WorkoutPlan({
    name: req.body.name,
    difficulty: req.body.difficulty,
    type: req.body.type,
    goal: req.body.goal,
    schedule: req.body.schedule,
    creationDate: req.body.creationDate,
    isActive: req.body.isActive,
    exercises: req.body.exercises,
  });

  try {
    const newPlan = await plan.save();
    res.status(201).json(newPlan);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a workout plan
router.patch('/:id', getPlan, async (req, res) => {
  if (req.body.name != null) {
    res.plan.name = req.body.name;
  }
  if (req.body.difficulty != null) {
    res.plan.difficulty = req.body.difficulty;
  }
  if (req.body.type != null) {
    res.plan.type = req.body.type;
  }
  if (req.body.goal != null) {
    res.plan.goal = req.body.goal;
  }
  if (req.body.schedule != null) {
    res.plan.schedule = req.body.schedule;
  }
  if (req.body.creationDate != null) {
    res.plan.creationDate = req.body.creationDate;
  }
  if (req.body.isActive != null) {
    res.plan.isActive = req.body.isActive;
  }
  if (req.body.exercises != null) {
    res.plan.exercises = req.body.exercises;
  }

  try {
    const updatedPlan = await res.plan.save();
    res.json(updatedPlan);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a workout plan
router.delete('/:id', getPlan, async (req, res) => {
  try {
    await res.plan.remove();
    res.json({ message: 'Deleted Workout Plan' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Middleware function to get a workout plan by ID
async function getPlan(req, res, next) {
  let plan;
  try {
    plan = await WorkoutPlan.findById(req.params.id).populate('exercises');
    if (plan == null) {
      return res.status(404).json({ message: 'Cannot find workout plan' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.plan = plan;
  next();
}

module.exports = router;
