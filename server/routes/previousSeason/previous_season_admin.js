// In this file:
// 1 / POST   / ADD_PREVIOUS_SEASON / addPreviousSeason
// 2 / PUT    / UPDATE_PREVIOUS_SEASON / updatePreviousSeason
// 3 / DELETE / DELETE_PREVIOUS_SEASON / deletePreviousSeason
// 4 / POST   / ADD_PREVIOUS_AWARD / addPreviousAward
// 5 / DELETE / DELETE_PREVIOUS_AWARD / deletePreviousAward
const express = require('express');
const router = express.Router();
const { PreviousSeason } = require('../../models/previousSeason');
const { auth } = require('../../middleware/auth');
const { admin } = require('../../middleware/admin');
const { errorMessage, successMessage } = require('../../messages/functions');
const { previousSeasonMessages } = require('../../messages');
const {
  addPreviousSeason,
  updatePreviousSeason,
  deletePreviousSeason,
  addPreviousAward,
  deletePreviousAward,
} = previousSeasonMessages;
const { ADMIN } = require('..');

// 1 / POST   / ADD_PREVIOUS_SEASON / addPreviousSeason
// body:
router.post(`${ADMIN}/add_previous_season`, auth, admin, (req, res) => {
  const notifyError = errorMessage(addPreviousSeason.error);
  const notifySuccess = successMessage(addPreviousSeason.success);
  const previousSeason = new PreviousSeason(req.body);
  previousSeason.save((err, data) => {
    if (err) return res.json({ ...notifyError, err: err });
    return res.status(200).json({ ...notifySuccess, data });
  });
});

// 2 / PUT    / UPDATE_PREVIOUS_SEASON / updatePreviousSeason
// params: id
// body:
router.put(`${ADMIN}/update_previous_season/:id`, auth, admin, (req, res) => {
  const notifyError = errorMessage(updatePreviousSeason.error);
  const notifySuccess = successMessage(updatePreviousSeason.success);
  const previousSeason = { ...req.body };
  PreviousSeason.findOneAndUpdate(
    { _id: req.params.id },
    { ...previousSeason },
    { runValidators: true },
    (err) => {
      if (err) return res.json({ ...notifyError, err: err });
      return res.status(200).json({ ...notifySuccess });
    }
  );
});

// 3 / DELETE / DELETE_PREVIOUS_SEASON / deletePreviousSeason
// params: id
router.delete(
  `${ADMIN}/delete_previous_season/:id`,
  auth,
  admin,
  (req, res) => {
    const notifyError = errorMessage(deletePreviousSeason.error);
    const notifySuccess = successMessage(deletePreviousSeason.success);
    PreviousSeason.findOneAndDelete({ _id: req.params.id }, (err) => {
      if (err) return res.json({ ...notifyError, err: err });
      return res.status(200).json({ ...notifySuccess });
    });
  }
);

// 4 / POST   / ADD_PREVIOUS_AWARD / addPreviousAward
router.post(
  `${ADMIN}/add_previous_award/:prevSeason_id`,
  auth,
  admin,
  (req, res) => {
    const notifyError = errorMessage(addPreviousAward.error);
    const notifySuccess = successMessage(addPreviousAward.success);
    const { prevSeason_id } = req.params;
    PreviousSeason.findOneAndUpdate(
      { _id: prevSeason_id },
      { $push: { awards: { ...req.body } } },
      { new: true, runValidators: true },
      (err) => {
        if (err) return res.json({ ...notifyError, err: err.message });
        return res.status(200).send({ ...notifySuccess });
      }
    );
  }
);

// 5 / DELETE / DELETE_PREVIOUS_AWARD / deletePreviousAward
router.delete(
  `${ADMIN}/delete_previous_award/:season_id/:id`,
  auth,
  admin,
  (req, res) => {
    const notifyError = errorMessage(deletePreviousAward.error);
    const notifySuccess = successMessage(deletePreviousAward.success);
    const { season_id, id } = req.params;

    PreviousSeason.findOneAndUpdate(
      { _id: season_id },
      { $pull: { awards: { _id: id } } },
      (err) => {
        if (err) return res.json({ ...notifyError, err: err });
        return res.status(200).send({ ...notifySuccess });
      }
    );
  }
);

module.exports = router;
