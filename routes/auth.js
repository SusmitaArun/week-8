// auth.js

const express = require('express');
const router = express.Router();
const User = require('../models/user');

// Login route
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });

    if (!user || user.password !== password) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    // You can use JWT or session-based authentication here
    // For simplicity, let's just send a success response
    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    console.error('Error occurred during login:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Registration route
router.post('/register', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Check if the username is already taken
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ error: 'Username is already taken' });
    }

    // Create a new user
    const newUser = new User({ username, password });
    await newUser.save();

    res.status(201).json({ message: 'Registration successful', user: newUser });
  } catch (error) {
    console.error('Error occurred during registration:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;



