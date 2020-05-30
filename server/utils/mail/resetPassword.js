const { emailTemplate } = require('./template');
const { URL } = require('../url');

const image = null;
const mainText =
  'You have received this email because you requested a password reset for your account. If you did not request this, you can ignore this email. Click here to reset your password:';
const secondaryText =
  'Your password reset token is valid for 4 hours. If you do not reset your password before this expires, you will have to request a new token. Contact your team admin for more information.';
const linkText = 'Reset Password';

const resetPassword = (user) => {
  const header = `Hi ${user.name}! Reset your password here`;
  const link = `${URL}/reset_password/${user.resetToken}`;

  return emailTemplate(header, image, link, linkText, mainText, secondaryText);
};

module.exports = { resetPassword };
