const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Get all users
router.get('/getusers', async (req, res) => {
    try {
        const users = await User.find().lean(); // Fetch all users and convert to plain JavaScript objects
        res.status(200).json(users); // Ensure the response is an array
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ message: 'Something went wrong' });
    }
});

module.exports = router;
