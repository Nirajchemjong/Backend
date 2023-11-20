const { Router } = require('express');
const { message: { SUCCESS } } = require('../utils/constant');
const { registerUser } = require('../controller/authController');
const { adminRegistrationValidation } = require('../middleWare/joiValidation');

const authRouter = Router();

// login
authRouter.post('/login', (req, res, next) => {
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
authRouter.get('/logout', (req, res, next) => {
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

authRouter.post('/admin-registration', adminRegistrationValidation, registerUser);

// Reset Password

authRouter.post('/reset-password', (req, res, next) => {
  try {
    res.json({
      status: SUCCESS,
      message: 'Reset Password Success',
    });
  } catch (e) {
    next(e);
  }
});
module.exports = authRouter;
