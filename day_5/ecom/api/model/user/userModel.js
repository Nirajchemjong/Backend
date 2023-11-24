const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
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
      default: '',
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
    isVerified: {
      type: Boolean,
      default: false,
    },
    verificationCode: {
      type: String,
      default: '',
    },
  },
  {
    timestamps: true,
  },
);

const User = mongoose.model('users', userSchema);

const createAdmin = (adminObj) => User.create(adminObj);
const getAdmin = (filter) => User.findOne(filter);
const updateAdmin = (filter, updatedObj) => User.findOneAndUpdate(filter, updatedObj);
module.exports = {
  createAdmin,
  updateAdmin,
  getAdmin,
};
