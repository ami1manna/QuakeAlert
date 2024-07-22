const express = require('express');
const router = express.Router();
const EmergencyContact = require('../models/EmergencyContact');
const sendNotification = require('../utils/sendNotification'); // Utility function to send notifications

// Add an emergency contact
router.post('/add', async (req, res) => {
  try {
    const { userId, name, phone, email } = req.body;
    const emergencyContact = new EmergencyContact({ user: userId, name, phone, email });
    await emergencyContact.save();
    res.status(201).json({ message: 'Emergency contact added successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to add emergency contact' });
  }
});

// Get emergency contacts for a user
router.get('/:userId', async (req, res) => {
  try {
    const contacts = await EmergencyContact.find({ user: req.params.userId });
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch emergency contacts' });
  }
});

// Notify emergency contacts
router.post('/notify', async (req, res) => {
  try {
    const { userId, message } = req.body;
    const contacts = await EmergencyContact.find({ user: userId });

    const notifications = contacts.map(contact => {
      return sendNotification(contact.phone, contact.email, message);
    });

    await Promise.all(notifications);

    res.status(200).json({ message: 'Emergency contacts notified successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to notify emergency contacts' });
  }
});

module.exports = router;
