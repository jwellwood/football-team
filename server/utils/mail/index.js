const nodemailer = require('nodemailer');
require('dotenv').config();
const { welcome } = require('./welcome');
const { resetPassword } = require('./resetPassword');

const getEmailData = (to, name, token, template, actionData) => {
  let data = null;

  switch (template) {
    case 'welcome':
      data = {
        from: 'mrstatsmailer <mr-stats@outlook.com>',
        to: to,
        subject: 'Welcome to MR',
        html: welcome(actionData),
      };
      break;
    case 'reset_password':
      data = {
        from: 'mrstatsmailer <mr-stats@outlook.com>',
        to: to,
        subject: 'Reset password',
        html: resetPassword(actionData),
      };
      break;

    default:
      return data;
  }

  return data;
};

const sendEmail = (to, name, token, template, actionData = null) => {
  const transporter = nodemailer.createTransport({
    service: 'hotmail',
    auth: {
      user: 'mr-stats@outlook.com',
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mail = getEmailData(to, name, token, template, actionData);

  transporter.sendMail(mail, (err, res) => {
    if (err) {
      console.log(err);
    } else {
      console.log('email sent');
    }
    transporter.close();
  });
};

module.exports = { sendEmail };
