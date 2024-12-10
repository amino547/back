const User = require('../models/User');
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { isAuth } = require('../middlewares/authMiddleware'); 

const authRoute = express.Router();

//http://localhost:5000/users/register
authRoute.post('/register', async (req, res) => {
  try {
    const { firstName, gender, age, weight, height, unitSystem, language, startOfWeek, email, password } = req.body;

    
    const normalizedGender = gender ? gender.toLowerCase() : 'male'; 

   
    const foundUser = await User.findOne({ email });
    if (foundUser) {
      return res.status(400).json({ msg: "Email already exists. Please log in!" });
    }

   
    if (!password || password.trim().length < 8) {
      return res.status(400).json({ msg: "Password must be at least 8 characters long." });
    }

   
    let startOfWeekValue = startOfWeek ? startOfWeek.toLowerCase() : null;
    const validDays = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    if (startOfWeekValue && !validDays.includes(startOfWeekValue)) {
      return res.status(400).json({ msg: 'Invalid day of the week for startOfWeek.' });
    }

   
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);

 
    const newUser = new User({
      firstName,
      gender: normalizedGender,
      age,
      weight,
      height,
      unitSystem,
      language,
      startOfWeek: startOfWeekValue, 
      email,
      password: hash,
    });


    await newUser.save();

    res.status(201).json({ msg: 'User registered successfully!', newUser });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'An error occurred. Please try again later.', error: err.message });
  }
});

//http://localhost:5000/users/login
authRoute.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const foundUser = await User.findOne({ email });

    if (!foundUser) {
      return res.status(404).json({ msg: "Email not found. Please register first." });
    }

 
    const match = await bcrypt.compare(password, foundUser.password);
    if (!match) {
      return res.status(400).json({ msg: "Incorrect password" });
    }


    const payload = { id: foundUser._id };
    const token = jwt.sign(payload, process.env.privateKey, { expiresIn: '1h' }); 

    res.status(200).json({ msg: "Login successful", token, foundUser });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Something went wrong, please try again." });
  }
});

authRoute.get('/myaccount', isAuth, (req, res) => {
  try {
    res.status(200).json(req.user);  
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Error retrieving user data.' });
  }
});


authRoute.put('/updateweight/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { weight } = req.body;

    const user = await User.findById(id);
    if (!user) return res.status(404).json({ error: 'User not found' });

    user.progress.push({ weight });
    user.weight = weight;
    await user.save();

    res.status(200).json({ message: 'Weight updated successfully', user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = authRoute;




