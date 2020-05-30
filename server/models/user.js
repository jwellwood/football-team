const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const SALT = 10;
const Schema = mongoose.Schema;
require('dotenv').config();

const userSchema = mongoose.Schema(
  {
    token: {
      type: String,
    },
    validateToken: {
      type: String,
    },
    validateTokenExp: {
      type: Number,
    },
    resetToken: {
      type: String,
    },
    resetTokenExp: {
      type: Number,
    },
    role: {
      type: String,
      default: 'user',
    },
    canEdit: {
      photo: {
        type: Boolean,
        default: true,
      },
      details: {
        type: Boolean,
        default: true,
      },
      targets: {
        type: Boolean,
        default: true,
      },
    },
    email: {
      type: String,
      required: true,
      trim: true,
      match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
      unique: 1,
    },
    isVerified: {
      type: Boolean,
      required: true,
      default: false,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 20,
      minlength: 2,
    },
    description: {
      type: String,
      maxlength: 150,
    },
    // This is to stop random users joining the squad. Admin has to manually accept users
    isPlayer: {
      type: Boolean,
      required: true,
      default: false,
    },
    // User input
    squadNumber: {
      type: Number,
      max: 99,
      min: 1,
    },
    position: {
      type: String,
      default: 'unassigned',
    },
    isCaptain: {
      type: Boolean,
      required: true,
      default: false,
    },
    image: {
      type: Object,
      required: true,
      default: { url: 'default', public_id: 0 },
    },
    appsTarget: {
      type: Number,
      min: 0,
      max: 99,
      default: 0,
    },
    goalsTarget: {
      type: Number,
      min: 0,
      max: 99,
      default: 0,
    },
    assistsTarget: {
      type: Number,
      min: 0,
      max: 99,
      default: 0,
    },
    matchesPlayed: [
      {
        result: { type: Schema.Types.ObjectId, ref: 'Result' },
        goals: { type: Number, min: 0, max: 99, default: 0 },
        assists: { type: Number, min: 0, max: 99, default: 0 },
        conceded: { type: Number, min: 0, max: 99, default: 0 },
        pensScored: { type: Number, min: 0, max: 99, default: 0 },
        pensMissed: { type: Number, min: 0, max: 99, default: 0 },
        ownGoals: { type: Number, min: 0, max: 99, default: 0 },
        yellowCards: { type: Number, min: 0, max: 99, default: 0 },
        mvp: { type: Boolean, default: false },
        redCard: { type: Boolean, default: false },
      },
    ],
  },
  {
    timestamps: true,
  }
);

userSchema.pre('save', function (next) {
  var user = this;
  if (user.isModified('password')) {
    bcrypt.genSalt(SALT, function (err, salt) {
      if (err) return next(err);
      bcrypt.hash(user.password, salt, function (err, hash) {
        if (err) return next(err);
        user.password = hash;
        next();
      });
    });
  } else {
    next();
  }
});

userSchema.methods.comparePassword = function (candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

userSchema.methods.generateToken = function (cb) {
  var user = this;
  var token = jwt.sign(user._id.toHexString(), process.env.JWT_PASSWORD);

  user.token = token;
  user.save(function (err, user) {
    if (err) return cb(err);
    cb(null, user);
  });
};

userSchema.methods.generateValidateToken = function (cb) {
  var user = this;
  crypto.randomBytes(20, function (err, buffer) {
    var token = buffer.toString('hex');
    user.validateToken = token;
    var date = new Date();
    var timestamp = date.getTime();
    var fourHours = 3600 * 1000 * 4;
    user.validateTokenExp = timestamp + fourHours;
    user.save(function (err, user) {
      if (err) return cb(err);
      cb(null, user);
    });
  });
};

userSchema.methods.generateResetToken = function (cb) {
  var user = this;
  crypto.randomBytes(20, function (err, buffer) {
    var token = buffer.toString('hex');
    user.resetToken = token;
    var date = new Date();
    var timestamp = date.getTime();
    var fourHours = 3600 * 1000 * 4;
    user.resetTokenExp = timestamp + fourHours;

    user.save(function (err, user) {
      if (err) return cb(err);
      cb(null, user);
    });
  });
};

userSchema.statics.findByToken = function (token, cb) {
  var user = this;
  jwt.verify(token, process.env.JWT_PASSWORD, function (err, decode) {
    user.findOne({ _id: decode, token: token }, function (err, user) {
      if (err) return cb(err);
      cb(null, user);
    });
  });
};

const User = mongoose.model('User', userSchema);

module.exports = { User };
