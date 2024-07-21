const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  lat:{
    type: Number,
  },
  long:{
    type: Number,
  }
});


module.exports = mongoose.model('User', UserSchema);
