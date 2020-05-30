const mongoose = require('mongoose');
// team, year, played, win, draw, lose, goalsFor, goalsAgainst, awards[awardName, awardWinner, awardValue, awardIcon]
const previousSeasonSchema = mongoose.Schema(
  {
    team: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Team',
      required: true,
    },
    year: {
      type: Number,
      required: true,
      min: 2000,
      max: 2100,
    },
    seasonName: {
      type: String,
      required: true,
      max: 30,
    },
    win: {
      type: Number,
      required: true,
      max: 99,
    },
    draw: {
      type: Number,
      required: true,
      max: 99,
    },
    lose: {
      type: Number,
      required: true,
      max: 99,
    },
    goalsFor: {
      type: Number,
      required: true,
      max: 999,
    },
    goalsAgainst: {
      type: Number,
      required: true,
      max: 999,
    },
    finalPosition: {
      type: Number,
      required: true,
      min: 1,
      max: 50,
    },
    awards: [
      {
        awardName: { type: String, required: true },
        awardWinner: { type: String, required: true },
        awardValue: { type: String },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const PreviousSeason = mongoose.model('PreviousSeason', previousSeasonSchema);

module.exports = { PreviousSeason };
