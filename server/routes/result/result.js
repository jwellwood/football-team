// In this file
// 1 / GET / GET_ALL_RESULTS / getAllResults
// 2 / GET / GET_RESULT_BY_ID / getResultById

const express = require('express');
const router = express.Router();
const { Result } = require('../../models/result');
const { errorMessage, successMessage } = require('../../messages/functions');
const { resultMessages } = require('../../messages');
const { getResult, getResults } = resultMessages;
const { PUBLIC } = require('..');

// 1 GET / GET_ALL_RESULTS / getAllResults / public

router.get(`${PUBLIC}/get_all_results`, (req, res) => {
  const notifyError = errorMessage(getResults.error);
  const notifySuccess = successMessage(getResults.success);
  Result.find()
    .sort([['date', 'desc']])
    .populate('players.player', 'name')
    .exec((err, arr) => {
      if (err) return res.json({ ...notifyError, err: err });
      return res.json({ ...notifySuccess, data: arr });
    });
});

// 2 GET / GET_RESULT_BY_ID / getResultById

router.get(`${PUBLIC}/get_result_by_id/:id`, (req, res) => {
  const notifyError = errorMessage(getResult.error);
  const notifySuccess = successMessage(getResult.success);
  let resultId = req.params.id;
  Result.findById(resultId)
    .populate('players.player_id', 'name')
    .exec((err, data) => {
      if (!data) return res.json({ ...notifyError, err: err });
      if (err) return res.json({ ...notifyError, err: err });
      return res.json({ ...notifySuccess, data });
    });
});

module.exports = router;
