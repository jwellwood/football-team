// In this file
// 1 / GET / GET TEAM / getTeam

const express = require('express');
const router = express.Router();
const { Team } = require('../../models/team');
const { PUBLIC } = require('..');
const { errorMessage, successMessage } = require('../../messages/functions');
const { teamMessages } = require('../../messages');
const { getTeam } = teamMessages;

// 1 GET / GET TEAM / getTeam

router.get(`${PUBLIC}/get_team`, (req, res) => {
  const notifyError = errorMessage(getTeam);
  const notifySuccess = successMessage(getTeam);
  Team.findOne().exec((err, data) => {
    if (err) return res.json({ ...notifyError, err: err });
    return res.json({ ...notifySuccess, data });
  });
});

module.exports = router;
