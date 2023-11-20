const mongoose = require('mongoose');

const authSchema = new mongoose.Schema({
  fName: {
    type: String,
    required: true,
    trim: true,
  },
  lName: {
    type: String,
    required: true,
    trim: true,
  },
  phone: {
    type: Number,
    required: true,
    maxLength: 10,
    trim: true,
  },
  address: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
}, {
  timestamps: true,
});

const Auth = mongoose.model('users', authSchema);
module.exports = Auth;
