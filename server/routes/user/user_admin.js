// 1 / GET / GET_ALL_USERS  / getAllUsers

const express = require('express');
const router = express.Router();
const { User } = require('../../models/user');
const { auth } = require('../../middleware/auth');
const { admin } = require('../../middleware/admin');
const { errorMessage, successMessage } = require('../../messages/functions');
const { userMessages } = require('../../messages');
const { getUsers, getUser, setPermissions, resetImage } = userMessages;
const { ADMIN } = require('..');

// 1 GET / GET_ALL_USERS / getAllUsers
router.get(`${ADMIN}/get_all_users`, auth, admin, (req, res) => {
  const notifyError = errorMessage(getUsers.error);
  User.find({}, '-email -password -token', (err, data) => {
    if (err) return res.json({ ...notifyError, err: err.message });
    return res.json({ success: true, data });
  });
});

// 2 GET / GET_USER_BY_ID / getUserById
router.get(`${ADMIN}/get_user_by_id/:id`, auth, admin, (req, res) => {
  const notifyError = errorMessage(getUser.error);
  User.findById(req.params.id)
    .select('-email -password -token')
    .exec((err, data) => {
      if (err) return res.json({ ...notifyError, err: err.message });
      return res.json({ success: true, data });
    });
});

// 3 PUT / SET_PERMISSIONS/ setPermissions
router.put(`${ADMIN}/set_permissions/:id`, auth, admin, (req, res) => {
  const notifyError = errorMessage(setPermissions.error);
  const notifySuccess = successMessage(setPermissions.success);
  const {
    name,
    isPlayer,
    isCaptain,
    isAdmin,
    squadNumber,
    position,
    appsTarget,
    goalsTarget,
    assistsTarget,
    canEditPhoto,
    canEditDetails,
    canEditTargets,
  } = req.body;
  User.findByIdAndUpdate(
    { _id: req.params.id },
    {
      name,
      isPlayer,
      isCaptain,
      role: isAdmin ? 'admin' : 'user',
      squadNumber,
      position,
      appsTarget,
      goalsTarget,
      assistsTarget,
      canEdit: {
        photo: canEditPhoto,
        details: canEditDetails,
        targets: canEditTargets,
      },
    },
    { new: true, runValidators: true },
    (err, data) => {
      if (err) return res.json({ ...notifyError, err: err.messsage });
      return res.status(200).send({ ...notifySuccess, data: data });
    }
  );
});

// 4 PUT / RESET_IMAGE / resetImage
router.put(`${ADMIN}/reset_image/:id`, auth, admin, (req, res) => {
  const notifyError = errorMessage(resetImage.error);
  const notifySuccess = successMessage(resetImage.success);
  User.findByIdAndUpdate(
    { _id: req.params.id },
    {
      image: { url: 'default', public_id: 0 },
    },
    { new: true, runValidators: true },
    (err, data) => {
      if (err) return res.json({ ...notifyError, err: err.messsage });
      return res.status(200).send({ ...notifySuccess, data: data });
    }
  );
});

module.exports = router;
