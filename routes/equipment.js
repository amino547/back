const express = require('express');
const router = express.Router();
const Equipment = require('../models/Equipment');

// Get all equipment
router.get('/', async (req, res) => {
  try {
    const equipment = await Equipment.find();
    res.json(equipment);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/count', async (req, res) => {
  try {
    const count = await Equipment.countDocuments();
    res.json({ count });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get one equipment by ID
router.get('/:id', async (req, res) => {
  try {
    const equipment = await Equipment.findById(req.params.id);
    if (!equipment) return res.status(404).json({ message: 'Equipment not found' });
    res.json(equipment);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//http://localhost:5000/api/equipment
router.post('/', async (req, res) => {
  const equipment = new Equipment(req.body);
  try {
    const newEquipment = await equipment.save();
    res.status(201).json(newEquipment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a equipment
router.put('/:id', async (req, res) => {
  try {
    const updatedEquipment = await Equipment.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedEquipment) return res.status(404).json({ message: 'Equipment not found' });
    res.json(updatedEquipment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a equipment
router.delete('/:id', async (req, res) => {
  try {
    const deletedEquipment = await Equipment.findByIdAndDelete(req.params.id);
    if (!deletedEquipment) return res.status(404).json({ message: 'Equipment not found' });
    res.json(deletedEquipment);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
