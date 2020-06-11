// In this file
// 1 GET / GET_ALL_PLAYERS / getAllPlayers
// 2 GET / GET_PLAYER_BY_ID / getPlayerById

const express = require('express');
const router = express.Router();
const { User } = require('../../models/user');
const { errorMessage, successMessage } = require('../../messages/functions');
const { squadMessages } = require('../../messages');
const { getPlayer, getPlayers } = squadMessages;
const { PUBLIC } = require('..');

// 1 GET / GET_ALL_PLAYERS / getAllPlayers

router.get(`${PUBLIC}/get_all_players`, (req, res) => {
  const notifyError = errorMessage(getPlayers.error);
  const notifySuccess = successMessage(getPlayers.success);
  User.find({ isPlayer: true })
    .select('-password -token -role -isPlayer -email')
    .populate(
      'matchesPlayed.result',
      '-players -matchReport -isForfeit -isOwnForfeit'
    )
    .sort([['name', 'asc']])
    .exec((err, data) => {
      if (err) return res.json({ ...notifyError, err: err.message });
      return res.json({ ...notifySuccess, data });
    });
});

// 2 GET / GET_PLAYER_BY_ID / getPlayerById

router.get(`${PUBLIC}/get_player_by_id/:id`, (req, res) => {
  const notifyError = errorMessage(getPlayer.error);
  const notifySuccess = successMessage(getPlayer.success);
  User.findById(req.params.id)
    .select('-password -token -role -isPlayer -email')
    .populate(
      'matchesPlayed.result',
      '-players -matchReport -isForfeit -isOwnForfeit'
    )
    .exec((err, data) => {
      if (err) return res.json({ ...notifyError, err: err });
      if (!data) return res.json({ ...notifyError, err: err });
      return res.json({
        ...notifySuccess,
        data: data,
        matchesPlayed: data.matchesPlayed,
      });
    });
});

module.exports = router;
