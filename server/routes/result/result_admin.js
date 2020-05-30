// In this file:
// 1 / POST   / ADD_RESULT / addResult
// 2 / PUT    / UPDATE_RESULT / updateResult
// 3 / DELETE / DELETE_RESULT / deleteResult
// 4 / POST   / ADD_MATCH_PLAYER / addMatchPlayer
// 5 / DELETE / DELETE_MATCH_PLAYER / deleteMatchPlayer
const express = require('express');
const router = express.Router();
const { Result } = require('../../models/result');
const { User } = require('../../models/user');
const { auth } = require('../../middleware/auth');
const { admin } = require('../../middleware/admin');
const { errorMessage, successMessage } = require('../../messages/functions');
const { resultMessages } = require('../../messages');
const {
  addResult,
  updateResult,
  deleteResult,
  addMatchPlayer,
  deleteMatchPlayer,
} = resultMessages;
const { ADMIN } = require('..');

// 1 POST / ADD_RESULT / addResult
// body: date, type, isForfeit, isOwnForfeit, isHome, teamGoals, opponentGoals, opponentName, matchReport,
router.post(`${ADMIN}/add_result`, auth, admin, (req, res) => {
  const notifyError = errorMessage(addResult.error);
  const notifySuccess = successMessage(addResult.success);
  const result = new Result(req.body);
  result.save((err, data) => {
    if (err) return res.json({ ...notifyError, err: err });
    return res.status(200).json({ ...notifySuccess, data });
  });
});

// 2 PUT / UPDATE_RESULT / updateResult
// params: id
// body: date, type, isForfeit, isOwnForfeit, isHome, teamGoals, opponentGoals, opponentName, matchReport, points
router.put(`${ADMIN}/update_result/:id`, auth, admin, (req, res) => {
  const notifyError = errorMessage(updateResult.error);
  const notifySuccess = successMessage(updateResult.success);
  const { teamGoals, opponentGoals } = req.body;
  Result.findOneAndUpdate(
    { _id: req.params.id },
    {
      ...req.body,
      points:
        teamGoals > opponentGoals ? 3 : teamGoals === opponentGoals ? 1 : 0,
    },
    { runValidators: true },
    (err) => {
      if (err) return res.json({ ...notifyError, err: err });
      return res.status(200).json({ ...notifySuccess });
    }
  );
});

// 3 DELETE / DELETE_RESULT / deleteResult
// params: id
router.delete(`${ADMIN}/delete_result/:id`, auth, admin, (req, res) => {
  const notifyError = errorMessage(deleteResult.error);
  const notifySuccess = successMessage(deleteResult.success);
  Result.findOneAndDelete({ _id: req.params.id }, (err) => {
    if (err) return res.json({ ...notifyError, err: err });
    return res.status(200).json({ ...notifySuccess });
  });
});

// 4 POST / ADD_MATCH_PLAYER_TO_RESULT / addMatchPlayerToResult
// params: id
// body: player_id, goals, assists, mvp, conceded, pensScored, pensMissed, ownGoals, yellowCards, redCard
router.post(`${ADMIN}/add_match_player/:result_id`, auth, admin, (req, res) => {
  const notifyError = errorMessage(addMatchPlayer.error);
  const notifySuccess = successMessage(addMatchPlayer.success);
  const { result_id } = req.params;
  Result.findOneAndUpdate(
    { _id: result_id },
    { $push: { players: { ...req.body } } },
    { new: true, runValidators: true },
    (err) => {
      if (err) return res.json({ ...notifyError, err: err.message });
      // Add result to player: matchesPlayed
      User.findOneAndUpdate(
        { _id: req.body.player_id },
        { $push: { matchesPlayed: { ...req.body, result: result_id } } },
        (err) => {
          if (err) return res.json({ ...notifyError, err: err });
          return res.status(200).send({ ...notifySuccess });
        }
      );
    }
  );
});

// 5 DELETE / DELETE_MATCH_PLAYER
// params: result_id, id
router.delete(
  `${ADMIN}/delete_match_player/:result_id/:id`,
  auth,
  admin,
  (req, res) => {
    const notifyError = errorMessage(deleteMatchPlayer.error);
    const notifySuccess = successMessage(deleteMatchPlayer.success);
    const { result_id, id } = req.params;
    Result.findOneAndUpdate(
      { _id: result_id },
      { $pull: { players: { player_id: id } } },
      (err) => {
        if (err) return res.json({ ...notifyError, err: err });
        User.findOneAndUpdate(
          { _id: id },
          { $pull: { matchesPlayed: { result: result_id } } },
          (err) => {
            if (err) return res.json({ ...notifyError, err: err });
            return res.status(200).send({ ...notifySuccess });
          }
        );
      }
    );
  }
);

module.exports = router;
