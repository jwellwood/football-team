// In this file:
// 1 / PUT / UPDATE_PLAYER_DETAILS  / updatePlayerDetails
// 2 / PUT / UPDATE_PLAYER_TARGETS  / updatePlayerTargets
// 3 / PUT / UPDATE_USER_IMAGE      / updateUserImage

const express = require('express');
const router = express.Router();
const { User } = require('../../models/user');
const { auth } = require('../../middleware/auth');
const {
  canEditDetails,
  canEditPhoto,
  canEditTargets,
} = require('../../middleware/canEdit');
const { errorMessage, successMessage } = require('../../messages/functions');
const { userMessages } = require('../../messages');
const { updateDetails, updateTargets, updateUserImage } = userMessages;
const { USER } = require('..');

// 1 / UPDATE_PLAYER_DETAILS / updatePlayerDetails
// PUT
// body: name, squadNumber, position

router.put(
  `${USER}/update_player_details`,
  auth,
  canEditDetails,
  (req, res) => {
    const notifyError = errorMessage(updateDetails.error);
    const notifySuccess = successMessage(updateDetails.success);
    const { name, squadNumber, position, description } = req.body;
    User.findOneAndUpdate(
      { _id: req.user._id },
      { name, squadNumber, position, description },
      { new: true, runValidators: true },
      (err) => {
        if (err) return res.json({ ...notifyError, err: err.message });
        return res.status(200).send({ ...notifySuccess });
      }
    );
  }
);

// 2 / UPDATE_PLAYER_TARGETS / updatePlayerTargets
// PUT
// body: appsTarget, goalsTarget, assistsTarget

router.put(
  `${USER}/update_player_targets`,
  auth,
  canEditTargets,
  (req, res) => {
    const notifyError = errorMessage(updateTargets.error);
    const notifySuccess = successMessage(updateTargets.success);
    const { appsTarget, goalsTarget, assistsTarget } = req.body;
    User.findOneAndUpdate(
      { _id: req.user._id },
      { appsTarget, goalsTarget, assistsTarget },
      { new: true, runValidators: true },
      (err) => {
        if (err) return res.json({ ...notifyError, err: err.message });
        return res.status(200).send({ ...notifySuccess });
      }
    );
  }
);

// 3 / UPDATE_USER_IMAGE / updateUserImage
// PUT
// body: url, public_id
router.put(`${USER}/update_user_image`, auth, canEditPhoto, (req, res) => {
  const notifyError = errorMessage(updateUserImage.error);
  const notifySuccess = successMessage(updateUserImage.success);
  User.findOneAndUpdate(
    { _id: req.user._id },
    { image: req.body },
    { new: true, runValidators: true },
    (err) => {
      if (err) return res.json({ ...notifyError, err: err });
      return res.status(200).send({ ...notifySuccess });
    }
  );
});

module.exports = router;
