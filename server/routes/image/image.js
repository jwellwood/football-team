// 1 / POST     / UPLOAD_USER_IMAGE / uploadUserImage
// 2 / DELETE   / REMOVE_USER_IMAGE / removeUserImage
// 3 / POST     / UPLOAD_TEAM_IMAGE / uploadTeamImage
// 4 / DELETE   / REMOVE_TEAM_IMAGE / removeTeamImage

const express = require('express');
const router = express.Router();
require('dotenv').config();
const cloudinary = require('cloudinary');
const formidable = require('express-formidable');
const { admin } = require('../../middleware/admin');
const { auth } = require('../../middleware/auth');
const { ADMIN, USER } = require('..');
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});
// Messages
const { errorMessage, successMessage } = require('../../messages/functions');
const { teamMessages, userMessages } = require('../../messages');
const { uploadImage, removeUserImage } = userMessages;
const { uploadTeamPhoto, removeAdminImage } = teamMessages;

// 1 POST / UPLOAD_USER_IMAGE / uploadUserImage

router.post(`${USER}/upload_user_image`, auth, formidable(), (req, res) => {
  const notifyError = errorMessage(uploadImage.error);
  const notifySuccess = successMessage(uploadImage.success);
  cloudinary.v2.uploader.upload(
    req.files.file.path,
    { eager: [{ format: 'jpg' }] },
    (err, result) => {
      if (err) return res.json({ ...notifyError, err: err });
      const { public_id, secure_url } = result;
      const url = secure_url;
      return res.json({ ...notifySuccess, public_id, url });
    }
  );
});

// 2 DELETE / REMOVE_USER_IMAGE / removeUserImage
// query: public_id
router.delete(`${USER}/remove_user_image`, auth, (req, res) => {
  const notifyError = errorMessage(removeUserImage.error);
  const notifySuccess = successMessage(removeUserImage.success);
  const { public_id } = req.query;
  cloudinary.v2.uploader.destroy(public_id, (err) => {
    if (err) return res.send({ ...notifyError, err: err });
    return res.send({ ...notifySuccess });
  });
});

// 3 POST / UPLOAD_TEAM_PHOTO / uploadTeamPhoto
// files: file.path

router.post(
  `${ADMIN}/upload_team_photo`,
  auth,
  admin,
  formidable(),
  (req, res) => {
    const notifyError = errorMessage(uploadTeamPhoto.error);
    const notifySuccess = successMessage(uploadTeamPhoto.success);
    cloudinary.v2.uploader.upload(
      req.files.file.path,
      { width: 200, height: 200, crop: 'fill', format: 'jpg' },
      (err, result) => {
        if (err) return res.json({ ...notifyError, err: err });
        const { public_id, secure_url } = result;
        const url = secure_url;
        return res.json({ ...notifySuccess, public_id, url });
      },
      { resource_type: 'auto' }
    );
  }
);

// 3 DELETE / REMOVE_ADMIN_IMAGE / removeAdminImage
// query: public_id
router.delete(`${ADMIN}/remove_admin_image`, auth, admin, (req, res) => {
  const notifyError = errorMessage(removeAdminImage.error);
  const notifySuccess = successMessage(removeAdminImage.success);
  const { public_id } = req.query;
  cloudinary.v2.uploader.destroy(public_id, (err) => {
    if (err) return res.send({ ...notifyError, err: err });
    return res.send({ ...notifySuccess });
  });
});

module.exports = router;
