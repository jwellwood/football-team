let admin = (req, res, next) => {
  if (req.user.role === 0) {
    return res.send('You need to be an admin to do that');
  }
  next();
};

module.exports = { admin };
