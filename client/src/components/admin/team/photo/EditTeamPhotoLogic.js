import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// functions
import {
  getTeam,
  updateTeamPhoto,
  uploadTeamPhoto,
  removeAdminImage,
} from 'reduxStore/team/team_actions';
import { showMessage } from 'reduxStore/app/message_actions';
// Routes
import { admin_routes } from 'router';
// Internal
import EditTeamPhotoForm from './EditTeamPhotoForm';

const EditTeamPhotoLogic = () => {
  const team = useSelector((state) => state.team.teamData);
  const { teamPhoto } = team;
  const history = useHistory();
  const dispatch = useDispatch();
  // State
  const [image, setImage] = useState(teamPhoto);
  const [imageUrl, setImageUrl] = useState(teamPhoto.url);
  const [loading, setLoading] = useState(false);

  // Funtions
  const onFileSelect = (e) => {
    const imageFile = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(imageFile);
    reader.onloadend = () => {
      setImageUrl([reader.result]);
    };
    setImage(imageFile);
  };

  const onDefaultSelect = () => {
    setImageUrl('default');
    setImage({ url: 'default', public_id: 0 });
  };

  const onUseDefault = () => {
    if (teamPhoto.url === 'default') {
      dispatch(showMessage(true, 'Default image selected', 'info'));
      getTeam();
      history.push(admin_routes.ADMIN);
    } else {
      dispatch(removeAdminImage(teamPhoto.public_id)).then((res) => {
        const { success, message, type } = res.payload;
        if (success) {
          updatePhotoOnDatabase('default', 0);
        } else {
          setLoading(false);
          dispatch(showMessage(true, message, type));
        }
      });
    }
  };

  const updatePhotoOnDatabase = (url, public_id) => {
    dispatch(updateTeamPhoto({ url, public_id, id: team._id })).then((res) => {
      const { success, message, type } = res.payload;
      if (success) {
        setLoading(false);
        dispatch(showMessage(true, message, type));
        getTeam();
        history.push(admin_routes.ADMIN);
      } else {
        setLoading(false);
        dispatch(showMessage(true, message, type));
      }
    });
  };

  const uploadImage = (image) => {
    const file = image;
    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', 'profile_images');

    if (teamPhoto.public_id !== 0) {
      dispatch(removeAdminImage(teamPhoto.public_id)).then((res) => {
        const { success, message, type } = res.payload;
        if (success) {
          // Add new image
          dispatch(uploadTeamPhoto(data)).then((res) => {
            const { success, message, type, url, public_id } = res.payload;
            if (success) {
              updatePhotoOnDatabase(url, public_id);
            } else {
              dispatch(showMessage(true, message, type));
            }
          });
        } else {
          setLoading(false);
          dispatch(showMessage(true, type, message));
        }
      });
    } else {
      dispatch(uploadTeamPhoto(data)).then((res) => {
        const { success, message, type, url, public_id } = res.payload;
        if (success) {
          updatePhotoOnDatabase(url, public_id);
        } else {
          dispatch(showMessage(true, message, type));
        }
      });
    }
  };

  const onSubmit = () => {
    setLoading(true);
    if (imageUrl === 'default') {
      onUseDefault();
    } else {
      uploadImage(image);
    }
  };

  return (
    <EditTeamPhotoForm
      loading={loading}
      onSubmit={onSubmit}
      onFileSelect={onFileSelect}
      onUseDefault={onDefaultSelect}
      team={team}
      imageUrl={imageUrl}
    />
  );
};

export default EditTeamPhotoLogic;
