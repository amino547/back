const express = require('express');
const router = express.Router();
const Trainer = require('../models/Trainer');

// Get all trainers
router.get('/', async (req, res) => {
  try {
    const trainers = await Trainer.find();
    res.json(trainers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/count', async (req, res) => {
  try {
    const count = await Trainer.countDocuments();
    res.json({ count });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get one trainer by ID
router.get('/:id', async (req, res) => {
  try {
    const trainer = await Trainer.findById(req.params.id);
    if (!trainer) return res.status(404).json({ message: 'Trainer not found' });
    res.json(trainer);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new trainer
router.post('/', async (req, res) => {
  const trainer = new Trainer(req.body);
  try {
    const newTrainer = await trainer.save();
    res.status(201).json(newTrainer);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a trainer
router.put('/:id', async (req, res) => {
  try {
    const updatedTrainer = await Trainer.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedTrainer) return res.status(404).json({ message: 'Trainer not found' });
    res.json(updatedTrainer);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a trainer
router.delete('/:id', async (req, res) => {
  try {
    const deletedTrainer = await Trainer.findByIdAndDelete(req.params.id);
    if (!deletedTrainer) return res.status(404).json({ message: 'Trainer not found' });
    res.json(deletedTrainer);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;