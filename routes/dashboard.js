const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');

// Protected route
router.get('/', auth, (req, res) => {
  res.json({ message: 'Welcome to the Admin Dashboard' });
});

module.exports = router;