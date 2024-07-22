const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const authRoutes = require('./routes/auth');
const geocodingRoutes = require('./routes/geocoding');
const userDetailsRoutes = require('./routes/userdetails');
const locationRoutes = require('./routes/location'); // Add this line
const safePlaces = require('./routes/getsafeplace');
const emergencyContacts = require('./routes/contact');

app.use('/auth', authRoutes);
app.use('/geocoding', geocodingRoutes);
app.use('/details', userDetailsRoutes);
app.use('/location', locationRoutes); // Add this line
app.use('/safeplaces', safePlaces);
app.use('/emergency-contacts',emergencyContacts)

// MongoDB connection
const MONGO_URI = process.env.MONGO_URI;
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
