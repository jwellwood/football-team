// In this file
// 1 / GET / GET_PREVIOUS SEASONS / getPreviousSeasons
// 2 / GET / GET_PREVIOUS_SEASON_BY_ID / getPreviousSeasonById

const express = require('express');
const router = express.Router();
const { PreviousSeason } = require('../../models/previousSeason');
const { errorMessage, successMessage } = require('../../messages/functions');
const { previousSeasonMessages } = require('../../messages');
const { getPreviousSeason, getPreviousSeasons } = previousSeasonMessages;
const { PUBLIC } = require('..');

// 1 / GET / GET_PREVIOUS SEASONS / getPreviousSeasons

router.get(`${PUBLIC}/get_previous_seasons`, (req, res) => {
  const notifyError = errorMessage(getPreviousSeasons.error);
  const notifySuccess = successMessage(getPreviousSeasons.success);
  PreviousSeason.find()
    .sort([['year', 'desc']])
    .exec((err, arr) => {
      if (err) return res.json({ ...notifyError, err: err });
      return res.json({ ...notifySuccess, data: arr });
    });
});

// 2 / GET / GET_PREVIOUS_SEASON_BY_ID / getPreviousSeasonById

router.get(`${PUBLIC}/get_previous_season_by_id/:id`, (req, res) => {
  const notifyError = errorMessage(getPreviousSeason.error);
  const notifySuccess = successMessage(getPreviousSeason.success);
  let prevSeasId = req.params.id;
  PreviousSeason.findById(prevSeasId).exec((err, data) => {
    if (!data) return res.json({ ...notifyError, err: err });
    if (err) return res.json({ ...notifyError, err: err });
    return res.json({ ...notifySuccess, data });
  });
});

module.exports = router;
