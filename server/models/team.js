const mongoose = require('mongoose');

const teamSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  location: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  league: {
    type: String,
    minlength: 2,
    maxlength: 30,
  },
  badge: {
    type: Object,
    required: true,
    default: { url: 'default', public_id: 0 },
  },
  teamPhoto: {
    type: Object,
    required: true,
    default: { url: 'default', public_id: 0 },
  },
  position: {
    type: String,
  },
  trophies: [
    {
      name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 30,
      },
      year: {
        type: Number,
        required: true,
        min: 2000,
        max: 2100,
      },
      isWinner: {
        type: Boolean,
        required: true,
        default: false,
      },
      isFinal: {
        type: Boolean,
        required: true,
        default: false,
      },
      opponent: {
        type: String,
        minlength: 2,
        maxlength: 30,
      },
      description: {
        type: String,
        maxlength: 999,
      },
    },
  ],
  hallOfFame: [
    {
      name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 30,
      },
      yearInducted: {
        type: Number,
        required: true,
        min: 2000,
        max: 2100,
        default: new Date().getFullYear(),
      },
      yearJoined: {
        type: Number,
        required: true,
        min: 2000,
        max: 2100,
      },
      yearLeft: {
        type: Number,
        required: true,
        min: 2010,
        max: 2100,
      },
      description: {
        type: String,
        maxlength: 999,
      },
    },
  ],
});

const Team = mongoose.model('Team', teamSchema);

module.exports = { Team };
