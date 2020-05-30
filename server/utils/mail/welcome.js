const { emailTemplate } = require('./template');
const { URL } = require('../url');

const image = null;
const linkText = 'Verify email address';
const mainText =
  'Click here to verify your account. When you get redirected, click the confirm verication button';
const secondaryText =
  'Your generated sign in token is valid for 4 hours. If you do not verify your account before this expires, you will be locked out. Contact your team admin for more information.';

const welcome = (user) => {
  const header = `Welcome ${user.name}!`;
  const link = `${URL}/verify_email/${user.validateToken}`;

  return emailTemplate(header, image, link, linkText, mainText, secondaryText);
};

module.exports = { welcome };
