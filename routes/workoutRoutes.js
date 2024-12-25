/*const express = require('express');
const router = express.Router();
const { createWorkout, getWorkouts, updateWorkout, deleteWorkout } = require('../controllers/workoutController');

// Define your routes and use the controller functions as callbacks
router.post('/create', createWorkout);  // Ensure createWorkout is a function
router.get('/', getWorkouts);  // Ensure getWorkouts is a function
router.put('/:workoutId', updateWorkout);  // Ensure updateWorkout is a function
router.delete('/:workoutId', deleteWorkout);  // Ensure deleteWorkout is a function

module.exports = router;*/



// routes/workoutRoutes.js
const express = require('express');
const router = express.Router();
const workoutController = require('../controllers/workoutController');

router.get('/', workoutController.getWorkouts);
router.post('/', workoutController.addWorkout);
router.delete('/:id', workoutController.deleteWorkout);

module.exports = router;


