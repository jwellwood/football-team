const mongoose = require('mongoose');
const resultsSchema = mongoose.Schema(
  {
    date: {
      type: Date,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    isForfeit: {
      type: Boolean,
      required: true,
      default: false,
    },
    isOwnForfeit: {
      type: Boolean,
      default: false,
    },
    isHome: {
      type: Boolean,
      required: true,
      default: true,
    },
    opponentName: {
      type: String,
      required: true,
      maxlength: 40,
      minlength: 2,
    },
    teamGoals: {
      type: Number,
      required: true,
      default: 0,
      max: 99,
      min: 0,
    },
    opponentGoals: {
      type: Number,
      required: true,
      default: 0,
      max: 99,
      min: 0,
    },
    points: {
      type: Number,
      max: 3,
      min: 0,
      default: function () {
        switch (true) {
          case +this.teamGoals > +this.opponentGoals:
            return 3;
          case +this.teamGoals === +this.opponentGoals:
            return 1;
          case +this.teamGoals < +this.opponentGoals:
            return 0;
        }
      },
    },
    matchReport: {
      type: String,
      maxlength: 999,
    },
    players: [
      {
        player_id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User',
          required: true,
        },
        goals: {
          type: Number,
          required: true,
          max: 99,
          min: 0,
          default: 0,
        },
        assists: {
          type: Number,
          required: true,
          max: 99,
          min: 0,
          default: 0,
        },
        mvp: {
          type: Boolean,
          required: true,
          default: false,
        },
        conceded: {
          type: Number,
          required: true,
          max: 99,
          min: 0,
          default: 0,
        },
        pensScored: {
          type: Number,
          required: true,
          max: 99,
          min: 0,
          default: 0,
        },
        pensMissed: {
          type: Number,
          required: true,
          max: 99,
          min: 0,
          default: 0,
        },
        ownGoals: {
          type: Number,
          required: true,
          max: 99,
          min: 0,
          default: 0,
        },
        yellowCards: {
          type: Number,
          required: true,
          max: 2,
          min: 0,
          default: 0,
        },
        redCard: {
          type: Boolean,
          required: true,
          default: false,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);
const Result = mongoose.model('Result', resultsSchema);

module.exports = { Result };
