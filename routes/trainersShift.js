const express = require('express');
const router = express.Router();
const TrainerShift = require('../models/TrainerShift');

// Get all trainer shifts
router.get('/', async (req, res) => {
  try {
    const trainerShifts = await TrainerShift.find().populate('trainerId');
    res.json(trainerShifts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get one trainer shift by ID
router.get('/:id', async (req, res) => {
  try {
    const trainerShift = await TrainerShift.findById(req.params.id).populate('trainerId');
    if (!trainerShift) return res.status(404).json({ message: 'Trainer shift not found' });
    res.json(trainerShift);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new trainer shift
router.post('/', async (req, res) => {
  const trainerShift = new TrainerShift(req.body);
  try {
    const newTrainerShift = await trainerShift.save();
    res.status(201).json(newTrainerShift);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a trainer shift
router.put('/:id', async (req, res) => {
  try {
    const updatedTrainerShift = await TrainerShift.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedTrainerShift) return res.status(404).json({ message: 'Trainer shift not found' });
    res.json(updatedTrainerShift);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a trainer shift
router.delete('/:id', async (req, res) => {
  try {
    const deletedTrainerShift = await TrainerShift.findByIdAndDelete(req.params.id);
    if (!deletedTrainerShift) return res.status(404).json({ message: 'Trainer shift not found' });
    res.json(deletedTrainerShift);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
