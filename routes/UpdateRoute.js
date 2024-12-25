// routes/updateRoutes.js
/*const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const authenticateToken = require('../middleware/authMiddleware');
const UpdateRouter = express.Router();

// Update profile route
UpdateRouter.put('/:id', authenticateToken, async (req, res) => {
  const userId = req.params.id;
  const { firstName, gender, age, height, weight, unitSystem, language, startOfWeek, email, password } = req.body;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    if (password) {
      user.password = await bcrypt.hash(password, 10);
    }

    user.firstName = firstName;
    user.gender = gender;
    user.age = age;
    user.height = height;
    user.weight = weight;
    user.unitSystem = unitSystem;
    user.language = language;
    user.startOfWeek = startOfWeek;
    user.email = email;

    await user.save();
    res.json({ message: 'Profile updated successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = UpdateRouter;*/
