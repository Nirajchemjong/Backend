const { Router } = require('express');
const { message: { SUCCESS } } = require('../utils/constant');

const auth = Router();

// login
auth.post('/login', (req, res, next) => {
  try {
    res.json({
      status: SUCCESS,
      message: 'This is login',
    });
  } catch (e) {
    next(e);
  }
});

// logout
auth.get('/logout', (req, res, next) => {
  try {
    res.json({
      status: SUCCESS,
      Message: 'logout success',
    });
  } catch (e) {
    next(e);
  }
});

// admin Registration

auth.post('/admin-registratio', (req, res, next) => {
  try {
    res.json({
      status: SUCCESS,
      message: 'Admin Registration Success',
    });
  } catch (e) {
    next(e);
  }
});

// Reset Password

auth.post('/reset-password', (req, res, next) => {
  try {
    res.json({
      status: SUCCESS,
      message: 'Reset Password Success',
    });
  } catch (e) {
    next(e);
  }
});
module.exports = auth;
