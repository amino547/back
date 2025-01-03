/*const express = require('express');
const { register, login, getUserProfile, updateUserProfile } = require('../controllers/userController');  // Import controller functions

const router = express.Router();

// Register route
router.post('/register', register);

// Login route
router.post('/login', login);

// Get user profile (requires authentication)
router.get('/profile', getUserProfile);

// Update user profile (requires authentication)
router.put('/profile', updateUserProfile);

module.exports = router;  // Export the router*/



const express = require('express');
const { getUser, updateUser } = require('../controllers/userController');
const router = express.Router();

router.get('/:id', getUser);
router.post('/:id/settings', updateUser);

module.exports = router;

















