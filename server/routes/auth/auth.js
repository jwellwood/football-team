// In this file: Actions related to authentication status and changing account details
// 1 / GET    / GET_AUTH                / getAuth
// 2 / POST   / SIGN_UP                 / signUp
// 3 / POST   / SIGN_IN                 / signIn
// 4 / GET    / SIGN_OUT                / signOut
// 5 / POST   / CHECK_CURRENT_PASSWORD  / checkCurrentPassword
// 6 / PUT    / UPDATE_PASSWORD         / updatePassword
// 7 / PUT    / UDPATE_USER_ACCOUNT     / updateUserAccount
// 8 / DELETE / DELETE USER             / deleteUser
// 9 / POST   / FORGOT_PASSWORD          / forgotPassword
// 10 / POST   / RESET_PASSWORD          / resetPassword
// 11 / GET   / VERIFY_EMAIL            / verifyEmail

const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
router.use(cookieParser());
const { User } = require('../../models/user');
const { auth } = require('../../middleware/auth');
const { errorMessage, successMessage } = require('../../messages/functions');
const { authMessages } = require('../../messages');
const {
  signUp,
  signIn,
  signOut,
  checkPassword,
  udpatePassword,
  updateAccount,
  deleteAccount,
  forgotPassword,
  resetPassword,
  validation,
  verifyEmail,
} = authMessages;
const { USER, PUBLIC } = require('..');
const { sendEmail } = require('../../utils/mail/index');

// 1 GET / GET_AUTH / getAuth / get_auth
router.get(`${USER}/get_auth`, auth, (req, res) => {
  const user = req.user;

  res.status(200).json({
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
      adminStatus: user.role,
      image: user.image,
      squadNumber: user.squadNumber,
      position: user.position,
      description: user.description,
      yearJoined: user.yearJoined,
      isCaptain: user.isCaptain,
      appsTarget: user.appsTarget,
      goalsTarget: user.goalsTarget,
      assistsTarget: user.assistsTarget,
      targetsPerGame: {
        goals: (user.goalsTarget / user.appsTarget).toFixed(1),
        assists: (user.assistsTarget / user.appsTarget).toFixed(1),
      },
      matchesPlayed: user.matchesPlayed,
      canEdit: {
        photo: user.canEdit.photo,
        details: user.canEdit.details,
        targets: user.canEdit.targets,
      },
    },
    isAuth: true,
    isAdmin: user.role === 'admin' ? true : false,
  });
});

// 2 POST / SIGN_UP / signUp
// body: name, email, password

router.post(`${USER}/sign_up`, (req, res) => {
  const notifyError = errorMessage(signUp.error);
  const notifySuccess = successMessage(signUp.success);
  const user = new User(req.body);

  user.save((err, user) => {
    if (err) return res.json({ ...notifyError, err: err.message });
    if (user) {
      user.generateValidateToken((err, user) => {
        if (err) return res.json({ ...notifyError });
        sendEmail(user.email, user.name, null, 'welcome', user); // to, name, token, template/ action
        res.status(200).json({ ...notifySuccess, userdata: user });
      });
    }
  });
});

// 3 POST / SIGN_IN / signIn
// body: email, password

router.post(`${USER}/sign_in`, (req, res) => {
  const notifyError = errorMessage(signIn.error);
  const notifySuccess = successMessage(signIn.success);
  const validationError = errorMessage(validation.error);
  // find the email
  User.findOne({ email: req.body.email }, (err, user) => {
    if (!user) return res.json({ ...notifyError });
    if (!user.isVerified) return res.json({ ...validationError });
    // Check the password
    user.comparePassword(req.body.password, (err, isMatch) => {
      if (!isMatch) {
        return res.json({ ...notifyError });
      }
      // Generate the auth token
      user.generateToken((err, user) => {
        if (err) return res.status(400).send(err);
        res
          .cookie('w_auth', user.token)
          .status(200)
          .json({ ...notifySuccess });
      });
    });
  });
});

// 4 GET / SIGN_OUT / signOut
// body:

router.get(`${USER}/sign_out`, auth, (req, res) => {
  const notifyError = errorMessage(signOut.error);
  const notifySuccess = successMessage(signOut.success);
  User.findOneAndUpdate(
    { _id: req.user._id },
    { token: '', isAuth: false },
    (err) => {
      if (err) return res.json({ ...notifyError, err: err.message });
      return res.status(200).json({ ...notifySuccess });
    }
  );
});

// 5 POST / CHECK_CURRENT_PASSWORD / checkCurrentPassword
// body: currentPassword

router.post(`${USER}/check_current_password`, auth, (req, res) => {
  const notifyError = errorMessage(checkPassword.error);
  const notifySuccess = successMessage(checkPassword.success);
  const id = req.user._id;
  User.findOne(id, (err, user) => {
    if (err) return res.json({ success: false, error: err.message });
    const currentPassword = user.password;
    const passwordToCheck = req.body.currentPassword;
    bcrypt.compare(passwordToCheck, currentPassword).then((isMatch) => {
      if (err) {
        return res.json({ ...notifyError, err: err.message });
        // if password isn't correct
      } else if (!isMatch) {
        return res.json({ ...notifyError, err: 'Incorrect password' });
      } else if (!err && isMatch) {
        return res.json({ ...notifySuccess });
      }
    });
  });
});

// 6 PUT / UPDATE_PASSWORD / updatePassword
// body: newPassword

router.put(`${USER}/update_password`, auth, (req, res) => {
  const notifyError = errorMessage(udpatePassword.error);
  const notifySuccess = successMessage(udpatePassword.success);
  const id = req.user._id;
  User.findById(id, 'password', (err, user) => {
    if (err) return res.json({ ...notifyError, err: err.message });
    user.password = req.body.newPassword;
    user.save((err) => {
      if (err) return res.json({ ...notifyError, err: err.message });
      res.json({ ...notifySuccess });
    });
  });
});

// 7 PUT / UDPATE_USER_ACCOUNT
// body: email
router.put(`${USER}/update_user_account`, auth, (req, res) => {
  const notifyError = errorMessage(updateAccount.error);
  const notifySuccess = successMessage(updateAccount.success);
  User.findOneAndUpdate(
    { _id: req.user._id },
    { email: req.body.email },
    { new: true, runValidators: true },
    (err) => {
      if (err) return res.json({ ...notifyError, err: err.message });
      return res.status(200).send({ ...notifySuccess });
    }
  );
});

// 8 DELETE / DELETE USER
router.delete(`${USER}/delete_user`, auth, (req, res) => {
  const notifyError = errorMessage(deleteAccount.error);
  const notifySuccess = successMessage(deleteAccount.success);
  User.deleteOne({ _id: req.user._id }, (err) => {
    if (err) return res.json({ ...notifyError, err: err.message });
    return res.status(200).json({ ...notifySuccess });
  });
});

// 9 POST / FORGOT_PASSWORD

router.post(`${PUBLIC}/forgot_password`, (req, res) => {
  const notifyError = errorMessage(forgotPassword.error);
  const notifySuccess = successMessage(forgotPassword.success);

  User.findOne({ email: req.body.email }, (err, user) => {
    if (err || !user) return res.json({ ...notifyError }); // The user doesn't actually see this, but it stops emails being sent if there is no associated user
    if (user) {
      user.generateResetToken((err, user) => {
        if (err) return res.json({ ...notifyError });
        sendEmail(user.email, user.name, null, 'reset_password', user);
        return res.status(200).json({ ...notifySuccess });
      });
    }
  });
});

// 10 POST / RESET_PASSWORD

router.post(`${PUBLIC}/reset_password`, (req, res) => {
  const notifyError = errorMessage(resetPassword.error);
  const notifySuccess = successMessage(resetPassword.success);
  let date = new Date();
  const timestamp = date.getTime();
  User.findOne(
    { resetToken: req.body.token, resetTokenExp: { $gte: timestamp } },
    (err, user) => {
      if (err || !user) return res.json({ ...notifyError }); // The user doesn't actually see this, but it stops emails being sent if there is no associated user
      if (user) {
        user.password = req.body.password;
        user.resetToken = '';
        user.resetTokenExp = null;
        user.save((err, doc) => {
          if (err) return res.json({ ...notifyError });
          return res.status(200).json({ ...notifySuccess });
        });
      }
    }
  );
});

// 11 / POST / Verify email

router.post(`${PUBLIC}/verify_email`, (req, res) => {
  const notifyError = errorMessage(verifyEmail.error);
  const notifySuccess = successMessage(verifyEmail.success);
  let date = new Date();
  const timestamp = date.getTime();
  User.findOne(
    { validateToken: req.body.token, validateTokenExp: { $gte: timestamp } },
    (err, user) => {
      if (err || !user) return res.json({ ...notifyError });
      if (user) {
        user.isVerified = true;
        user.validateToken = '';
        user.validateTokenExp = null;
        user.save((err, doc) => {
          if (err) return res.json({ ...notifyError });
          return res.status(200).json({ ...notifySuccess });
        });
      }
    }
  );
});

module.exports = router;
