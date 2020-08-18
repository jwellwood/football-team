// In this file
// 1 POST   / ADD_TEAM                / addTeam
// 2 PUT    / UPDATE_TEAM_DETAILS     / updateTeamDetails
// 3 PUT    / UPDATE_TEAM_PHOTO       / updateTeamPhoto
// 4 POST   / ADD_HALL_OF_FAMER       / addHallOfFamer
// 5 PUT    / UPDATE_HALL_OF_FAMER    / updateHallOfFamer
// 6 DELETE / DElETE_HALL_OF_FAMER    / deleteHallOfFamer
// 7 POST   / ADD_NEW_TROPHY          / addNewTrophy
// 8 DELETE / DELETE_TROPHY           / deleteTrophy

const express = require('express');
const router = express.Router();
const { admin } = require('../../middleware/admin');
const { auth } = require('../../middleware/auth');
const { Team } = require('../../models/team');
// Messages
const { errorMessage, successMessage } = require('../../messages/functions');
const { teamMessages } = require('../../messages');
const {
  addTeam,
  updateTeam,
  updateTeamPhoto,
  addHallOfFamer,
  updateHallOfFamer,
  deleteHallOfFamer,
  addTrophy,
  deleteTrophy,
} = teamMessages;
const { ADMIN } = require('..');

// 1 POST / ADD_TEAM / addTeam
// body: name, location, league, badge, position, image, trophies, hallOfFame

router.post(`${ADMIN}/add_team`, auth, admin, (req, res) => {
  const notifyError = errorMessage(addTeam.error);
  const notifySuccess = successMessage(addTeam.success);
  const team = new Team(req.body);
  team.save((err, data) => {
    if (err) return res.json({ ...notifyError, err: err.message });
    res.status(200).json({ ...notifySuccess, data });
  });
});

// 2 PUT / UPDATE_TEAM_DETAILS / updateTeamDetails
// Body: id, name, location, league, position,
router.put(`${ADMIN}/update_team_details`, auth, admin, (req, res) => {
  const notifyError = errorMessage(updateTeam.error);
  const notifySuccess = successMessage(updateTeam.success);
  const { id, name, location, league, position, currentSeason } = req.body;
  Team.findOneAndUpdate(
    { _id: id },
    {
      name,
      location,
      league,
      position,
      currentSeason,
    },
    { new: true, runValidators: true },
    (err) => {
      if (err) return res.json({ ...notifyError, err: err.message });
      return res.status(200).send({ ...notifySuccess });
    }
  );
});

// 3 PUT / UPDATE_TEAM_PHOTO / updateTeamPhoto
// body: teamId, url, public_id
router.put(`${ADMIN}/update_team_photo`, auth, admin, (req, res) => {
  const notifyError = errorMessage(updateTeamPhoto.error);
  const notifySuccess = successMessage(updateTeamPhoto.success);
  const { id, url, public_id } = req.body;
  Team.findOneAndUpdate(
    { _id: id },
    { teamPhoto: { url, public_id } },
    { new: true, runValidators: true },
    (err) => {
      if (err) return res.json({ ...notifyError, err: err });
      return res.status(200).send({ ...notifySuccess });
    }
  );
});

// 4 POST / ADD HALL OF FAMER / addHallOfFamer
// body: teamId, name, yearInducted, yearJoined, yearLeft, description

router.post(`${ADMIN}/add_hall_of_famer`, auth, admin, (req, res) => {
  const notifyError = errorMessage(addHallOfFamer.error);
  const notifySuccess = successMessage(addHallOfFamer.success);
  const hallOfFamer = { ...req.body };
  const teamId = req.body.id;
  Team.findOneAndUpdate(
    { _id: teamId },
    { $push: { hallOfFame: hallOfFamer } },
    { new: true, runValidators: true },
    (err) => {
      if (err) return res.json({ ...notifyError, err: err });
      return res.status(200).send({ ...notifySuccess });
    }
  );
});

// 5 PUT / UPDATE HALL OF FAMER
// params: id
// body: teamId, name, yearInducted, yearJoined, yearLeft, description

router.put(`${ADMIN}/update_hall_of_famer/:id`, auth, admin, (req, res) => {
  const notifyError = errorMessage(updateHallOfFamer.error);
  const notifySuccess = successMessage(updateHallOfFamer.success);
  const {
    team_id,
    name,
    yearInducted,
    yearJoined,
    yearLeft,
    description,
  } = req.body;

  Team.findOneAndUpdate(
    { _id: team_id, 'hallOfFame._id': req.params.id },
    {
      $set: {
        'hallOfFame.$.name': name,
        'hallOfFame.$.yearInducted': yearInducted,
        'hallOfFame.$.yearJoined': yearJoined,
        'hallOfFame.$.yearLeft': yearLeft,
        'hallOfFame.$.description': description,
      },
    },
    (err) => {
      if (err) return res.send(500).json({ ...notifyError, err: err });
      return res.status(200).send({ ...notifySuccess });
    }
  );
});

// 6 DELETE / DELETE HALL OF FAMER
// params: team_id, id

router.delete(
  `${ADMIN}/delete_hall_of_famer/:team_id/:id`,
  auth,
  admin,
  (req, res) => {
    const notifyError = errorMessage(deleteHallOfFamer.error);
    const notifySuccess = successMessage(deleteHallOfFamer.success);
    const { team_id, id } = req.params;
    Team.findOneAndUpdate(
      { _id: team_id },
      { $pull: { hallOfFame: { _id: id } } },
      (err) => {
        if (err) return res.json({ ...notifyError, err: err });
        return res.status(200).json({ ...notifySuccess });
      }
    );
  }
);

// 7 POST / ADD NEW TROPHY
// body: teamId, name, year, isWinner, isFinal, opponent

router.post(`${ADMIN}/add_new_trophy`, auth, admin, (req, res) => {
  const notifyError = errorMessage(addTrophy.error);
  const notifySuccess = successMessage(addTrophy.success);
  const trophy = { ...req.body };
  Team.findOneAndUpdate(
    { _id: req.body.id },
    { $push: { trophies: trophy } },
    { new: true, runValidators: true },
    (err) => {
      if (err) return res.json({ ...notifyError, err: err });
      return res.status(200).send({ ...notifySuccess });
    }
  );
});

// 8 DELETE / DELETE_TROPHY
// params: id,

router.delete(
  `${ADMIN}/delete_trophy/:team_id/:id`,
  auth,
  admin,
  (req, res) => {
    const notifyError = errorMessage(deleteTrophy.error);
    const notifySuccess = successMessage(deleteTrophy.success);
    const { team_id, id } = req.params;
    Team.findOneAndUpdate(
      { _id: team_id },
      { $pull: { trophies: { _id: id } } },
      (err) => {
        if (err) return res.json({ ...notifyError, err: err });
        return res.status(200).json({ ...notifySuccess });
      }
    );
  }
);

module.exports = router;
