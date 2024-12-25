/*const express = require('express');
const { isAuth } = require('../middlewares/authMiddleware');
const User = require('../models/User');
const bcrypt = require('bcrypt');

const settingRoutes = express.Router();

//http://localhost:5000/user/settings/:id
settingRoutes.get('/settings/:id', async (req, res) => {
  try {
    
    const user = await User.findById(req.params.id).select('-password');
    if (!user) return res.status(404).json({ msg: 'User not found' });

    res.status(200).json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Error fetching user settings' });
  }
});


//http://localhost:5000/user/settings/:id
settingRoutes.put('/settings/:id', async (req, res) => {
  try {
    const { firstName, gender, age, weight, 
        height, unitSystem, language, startOfWeek, email ,password } = req.body;

 
    const validDays = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    let startOfWeekValue = startOfWeek ? startOfWeek.toLowerCase() : null;
    if (startOfWeekValue && !validDays.includes(startOfWeekValue)) {
      return res.status(400).json({ msg: 'Invalid startOfWeek. It must be one of the following: sunday, monday, tuesday, wednesday, thursday, friday, saturday.' });
    }

    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);

 
    const updatedFields = {
      firstName,
      gender,
      age,
      weight,
      height,
      unitSystem: unitSystem || 'metric',  
      language: language || 'en',  
      startOfWeek: startOfWeekValue,
      email ,
      password:hash
    };

 
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { $set: updatedFields },
      { new: true, runValidators: true }
    );

    if (!user) return res.status(404).json({ msg: 'User not found' });

    res.status(200).json({ msg: 'Settings updated successfully', user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Error updating settings', error: err.message });
  }
});




module.exports = settingRoutes;*/


// routes/settingRoutes.js
const express = require('express');
const { isAuth } = require('../middlewares/authMiddleware');
const User = require('../models/User');
const bcrypt = require('bcrypt');

const settingRoutes = express.Router();

// Fetch user settings
settingRoutes.get('/settings/:id', isAuth, async (req, res) => {
  try {
    const userId = req.params.id;
    if (!userId) {
      return res.status(400).json({ msg: 'User ID is required' });
    }

    const user = await User.findById(userId).select('-password');
    if (!user) return res.status(404).json({ msg: 'User not found' });

    res.status(200).json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Error fetching user settings' });
  }
});

// Update user settings
/*settingRoutes.put('/settings/:id', isAuth, async (req, res) => {
  try {
    const userId = req.params.id;
    if (!userId) {
      return res.status(400).json({ msg: 'User ID is required' });
    }

    const { firstName, gender, age, weight, height, unitSystem, language, startOfWeek, email, password } = req.body;

    const validDays = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    let startOfWeekValue = startOfWeek ? startOfWeek.toLowerCase() : null;
    if (startOfWeekValue && !validDays.includes(startOfWeekValue)) {
      return res.status(400).json({ msg: 'Invalid startOfWeek. It must be one of the following: sunday, monday, tuesday, wednesday, thursday, friday, saturday.' });
    }

    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);

    const updatedFields = {
      firstName,
      gender,
      age,
      weight,
      height,
      unitSystem: unitSystem || 'metric',
      language: language || 'en',
      startOfWeek: startOfWeekValue,
      email,
      password: hash
    };

    const user = await User.findByIdAndUpdate(
      userId,
      { $set: updatedFields },
      { new: true, runValidators: true }
    );

    if (!user) return res.status(404).json({ msg: 'User not found' });
    res.status(200).json({ msg: 'Settings updated successfully', user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Error updating settings', error: err.message });
  }
});*/

module.exports = settingRoutes;


