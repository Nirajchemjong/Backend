const { Router } = require('express');
const { message: { SUCCESS } } = require('../utils/constant');
const { registerUser, verigyUser } = require('../controller/userController');
const { adminRegistrationValidation, adminVerificationValidation } = require('../middleWare/joiValidation');

const userRouter = Router();

// login
userRouter.post('/login', (req, res, next) => {
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
userRouter.get('/logout', (req, res, next) => {
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

userRouter.post('/admin-registration', adminRegistrationValidation, registerUser);

// Reset Password

userRouter.post('/reset-password', (req, res, next) => {
  try {
    res.json({
      status: SUCCESS,
      message: 'Reset Password Success',
    });
  } catch (e) {
    next(e);
  }
});

userRouter.post('/admin-verification', adminVerificationValidation, verigyUser);
module.exports = userRouter;
