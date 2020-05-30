let canEditPhoto = (req, res, next) => {
  if (!req.user.canEdit.photo) {
    return res.send({
      success: false,
      message: 'Editing the photo has been disabled for this user',
      type: 'error',
    });
  }
  next();
};
let canEditDetails = (req, res, next) => {
  if (!req.user.canEdit.details) {
    return res.send({
      success: false,
      message: 'Editing details has been disabled for this user',
      type: 'error',
    });
  }
  next();
};
let canEditTargets = (req, res, next) => {
  if (!req.user.canEdit.targets) {
    return res.send({
      success: false,
      message: 'Editing targets has been disabled for this user',
      type: 'error',
    });
  }
  next();
};

module.exports = { canEditPhoto, canEditDetails, canEditTargets };
