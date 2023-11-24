/* eslint-disable import/order */
/* eslint-disable import/no-extraneous-dependencies */
const { v4: uuidv4 } = require('uuid');
const { message: { SUCCESS } } = require('../utils/constant');
const { encryptPassword } = require('../helper/bcrypt');
const { createAdmin } = require('../model/user/userModel');

// eslint-disable-next-line no-unused-expressions
'use strict';
const nodemailer = require('nodemailer');

async function registerUser(req, res, next) {
  try {
    // Check for Schema validation of req.body before saving to DB
    // JOI Schema Validation
    const { email, password, fName } = req.body;
    console.log(uuidv4);

    req.body.password = encryptPassword(password);
    // 1. Add verification code to user and then save
    req.body.verificationCode = uuidv4(); // we got the verificationCode.

    //  --> isVerified = false
    //  -->verifactionCode = ""
    // -->
    // 2. Send an email so they can verify their email
    const link = '';
    const transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      auth: {
        user: 'peter.batz@ethereal.email',
        pass: 'c5qqnXq84E4xQcFdWa',
      },
    });

    await transporter.sendMail({
      from: '"Coderniraj" <info@nirajchemjong.com>',
      to: email,
      subject: 'Account Activation Required',
      text: `Hello ${fName}, please clink on this link ${link} to activate your Account`,
      html: ` <p> 
      Hello ${fName}, 
      Please clink on this link to active your Account, 
      ${link},
      </p>`, // html body
    });

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

module.exports = {
  registerUser,
};
