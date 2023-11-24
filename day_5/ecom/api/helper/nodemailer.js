/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-multiple-empty-lines */

const nodemailer = require('nodemailer');

const sendAccountActivationEmail = async ({ link, fName, email }) => {
//   const { link, fName, email } = obj;
  const transporter = nodemailer.createTransport({
    host: process.env.NODEMAILER_HOST,
    port: process.env.NODEMAILER_PORT,
    auth: {
      user: process.env.NODEMAILER_USER,
      pass: process.env.NODEMAILER_PASS,
    },
  });

  await transporter.sendMail({
    from: '"Coderniraj" <info@nirajchemjong.com>',
    to: email,
    subject: 'Account Activation Required',
    text: `Hello ${fName}, please clink on this link ${link} to activate your Account`,
    html: ` <p> 
        Hello ${fName}, 
        Please clink on this <a href=${link}>${link}</a> to active your Account.
        </p>`, // html body
  });
};

const sendVerificationConfirmation = async ({ link, email, fName }) => {
  const transporter = nodemailer.createTransport({
    host: process.env.NODEMAILER_HOST,
    port: process.env.NODEMAILER_PORT,
    auth: {
      user: process.env.NODEMAILER_USER,
      pass: process.env.NODEMAILER_PASS,
    },
  });

  await transporter.sendMail({
    from: '"Coderniraj" <info@nirajchemjong.com>',
    to: email,
    subject: 'Account Activated Successfully',
    text: `Welcome to Nippo World, ${fName}, Thank you for confirmation. please click the link to login ${link}`,
    html: ` <p> 
                Welcome to Nippo World, ${fName}, Thank you for confirmation.please click the link to login ${link}
            </p>`, // html body
  });
};

module.exports = {
  sendAccountActivationEmail, sendVerificationConfirmation,
};
