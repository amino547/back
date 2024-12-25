/*const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const { validationResult } = require('express-validator');
const User = require('../models/User'); // Import the User model

dotenv.config(); // Load environment variables

// Register
const register = async (req, res) => {
  try {
    const { firstName, gender, age, height, weight, unitSystem, language, startOfWeek, email, password } = req.body;

    // Log the body to ensure password is being received
    console.log("Request Body:", req.body);

    // Basic validation
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Check if password is provided
    if (!password) {
      return res.status(400).json({ error: 'Password is required' });
    }

    // Check if email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already in use' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user object
    const user = new User({
      firstName,
      gender,
      age,
      height,
      weight,
      unitSystem,
      language,
      startOfWeek,
      email,
      password: hashedPassword,
    });

    // Save user to DB
    await user.save();

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Return response with token
    res.status(201).json({ token, userId: user._id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
};

// Login
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Basic validation
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: 'User not found' });
    }

    // Check if password matches
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Return response with token
    res.status(200).json({ token, userId: user._id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
};

// Get User Profile
const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.userId).select('-password');
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json({
      id: user._id,
      firstName: user.firstName,
      gender: user.gender,
      age: user.age,
      height: user.height,
      weight: user.weight,
      unitSystem: user.unitSystem,
      language: user.language,
      startOfWeek: user.startOfWeek,
      email: user.email,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
};

// Update User Profile
const updateUserProfile = async (req, res) => {
  try {
    const { firstName, gender, age, height, weight, unitSystem, language, startOfWeek, email } = req.body;

    const user = await User.findByIdAndUpdate(
      req.userId,
      { firstName, gender, age, height, weight, unitSystem, language, startOfWeek, email },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.status(200).json({
      id: user._id,
      firstName: user.firstName,
      gender: user.gender,
      age: user.age,
      height: user.height,
      weight: user.weight,
      unitSystem: user.unitSystem,
      language: user.language,
      startOfWeek: user.startOfWeek,
      email: user.email,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
};

// Exporting functions as a module
module.exports = { register, login, getUserProfile, updateUserProfile };*/



const User = require('../models/userModel');

const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select('-password');
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

const updateUser = async (req, res) => {
  const { name, email } = req.body;
  const userFields = {};
  if (name) userFields.name = name;
  if (email) userFields.email = email;
  try {
    let user = await User.findById(req.params.id);
    if (user) {
      user = await User.findByIdAndUpdate(
        req.params.id,
        { $set: userFields },
        { new: true }
      ).select('-password');
      return res.json(user);
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

module.exports = { getUser, updateUser };














