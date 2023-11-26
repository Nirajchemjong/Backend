/* eslint-disable consistent-return */
/* eslint-disable no-underscore-dangle */
/* eslint-disable import/order */
/* eslint-disable import/no-extraneous-dependencies */
const { v4: uuidv4 } = require('uuid');
const { message: { SUCCESS }, message } = require('../utils/constant');
const { encryptPassword, comparePassword } = require('../helper/bcrypt');
const { createAdmin, updateAdmin, getAdmin } = require('../model/user/userModel');
const { sendAccountActivationEmail, sendVerificationConfirmation } = require('../helper/nodemailer');
const { createAccessJWT, createRefreshJWT } = require('../helper/jwt');

const FR_URL = process.env.FE_URL || 'http://localhost:3002';

async function registerUser(req, res, next) {
  try {
    // Check for Schema validation of req.body before saving to DB
    // JOI Schema Validation
    const { email, password, fName } = req.body;
    // console.log(uuidv4);

    req.body.password = encryptPassword(password);
    // 1. Add verification code to user and then save
    const verificationCode = uuidv4();
    req.body.verificationCode = verificationCode; // we got the verificationCode.

    //  --> isVerified = false
    //  -->verifactionCode = ""
    // -->
    // 2. Send an email so they can verify their email
    const link = `${FR_URL}/admin-verification?c=${verificationCode}&e=${email}`;
    // const obj = { link, fName, email };
    await sendAccountActivationEmail({ link, fName, email });
    // console.log(req.body);
    // await userModel.create(req.body);
    await createAdmin(req.body);
    res.status(200).json({
      status: SUCCESS,
      message: 'Please Check you email account to verify your account',
    });
  } catch (e) {
    next(e);
  }
}

// verfing users once they got email
const verigyUser = async (req, res, next) => {
  try {
    const { e, c } = req.body;
    const filter = {
      email: e,
      verificationCode: c,
    };
    const updateObj = {
      inVerified: true,
      verificationCode: '',
    };
    const response = await updateAdmin(filter, updateObj);

    if (response?._id) {
      const { fName } = await getAdmin({ email: e }); // destructing to fName
      await sendVerificationConfirmation({ link: FR_URL, email: e, fName });
      res.json({
        status: SUCCESS,
        message: 'your account is verified successfully, you can login now',
      });
    } else {
      res.status(403).json({
        status: message.ERROR,
        message: 'your link is expired or invalid',
      });
    }
    console.log(response);
  } catch (e) {
    next(e);
  }
};

/*

loign user
*/

const loginUserController = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    console.log(email, password);
    // make user password is valid

    const user = await getAdmin({ email });

    if (user?._id) {
      const isPassValid = comparePassword(password, user?.password);
      if (isPassValid) {
        // const { _id } = user;
        // if pass valid
        // now generate JWT Tokens and send it back
        const accessJWT = await createAccessJWT({ email });
        const refreshJWT = await createRefreshJWT({ email });

        return res.status(200).json({
          status: SUCCESS,
          message: 'Logged in success',
          token: {
            accessJWT,
            refreshJWT,
          },
        });
      }
    }
    return res.status(403).json({
      status: message.ERROR,
      message: 'Invalid Login Detials',
    });
  } catch (error) {
    next(error);
  }
};
module.exports = {
  registerUser,
  verigyUser,
  loginUserController,
};
