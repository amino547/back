/*const Workout = require('../models/Workout');

// Create Workout
const createWorkout = async (req, res) => {
  try {
    const { name, difficulty, type, goal, schedule, creationDate, exercises } = req.body;
    const newWorkout = new Workout({
      name,
      difficulty,
      type,
      goal,
      schedule: schedule.split(','),
      creationDate,
      exercises: exercises.map(exerciseId => ({ exercise: exerciseId })),
    });
    await newWorkout.save();
    res.status(201).json({ workout: newWorkout });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get Workouts
const getWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.find();
    res.status(200).json(workouts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update Workout
const updateWorkout = async (req, res) => {
  try {
    const { workoutId } = req.params;
    const { name, difficulty, type, goal, schedule, creationDate, exercises } = req.body;
    const workout = await Workout.findByIdAndUpdate(workoutId, {
      name,
      difficulty,
      type,
      goal,
      schedule: schedule.split(','),
      creationDate,
      exercises: exercises.map(exerciseId => ({ exercise: exerciseId })),
    });
    if (!workout) {
      return res.status(404).json({ error: 'Workout not found' });
    }
    res.status(200).json({ workout });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete Workout
const deleteWorkout = async (req, res) => {
  try {
    const { workoutId } = req.params;
    const workout = await Workout.findByIdAndDelete(workoutId);
    if (!workout) {
      return res.status(404).json({ error: 'Workout not found' });
    }
    res.status(200).json({ message: 'Workout deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createWorkout, getWorkouts, updateWorkout, deleteWorkout };*/



