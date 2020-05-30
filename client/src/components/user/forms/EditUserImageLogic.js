import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// Functions
import {
  updateUserImage,
  removeUserImage,
  uploadUserImage,
} from 'reduxStore/user/user_actions';
import { showMessage } from 'reduxStore/app/message_actions';
import { getAllPlayers } from 'reduxStore/squad/squad_actions';
// Routes
import { PROFILE } from 'router/route_names';
// Components
import EditUserImageForm from './EditUserImageForm';

const EditUserImageLogic = () => {
  const user = useSelector((state) => state.auth.userData);
  const history = useHistory();
  const dispatch = useDispatch();
  // State
  const [image, setImage] = useState(user.profileImage);
  const [imageUrl, setImageUrl] = useState(user.image.url);
  const [loading, setLoading] = useState(false);

  // Functions
  //Shows the selected file to the user, and updates the state to match the filepath
  const onFileSelect = (e) => {
    const imageFile = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(imageFile);
    reader.onloadend = () => {
      setImageUrl([reader.result]);
    };
    setImage(imageFile);
  };

  // Sets the image back to the default
  const onDefaultSelect = () => {
    setImageUrl('default');
    setImage({ url: 'default', public_id: 0 });
  };

  const updatePhotoOnDatabase = (url, public_id) => {
    dispatch(updateUserImage({ url, public_id })).then((res) => {
      const { success, message, type } = res.payload;
      if (success) {
        setLoading(false);
        dispatch(showMessage(true, message, type));
        history.push(PROFILE);
      } else {
        setLoading(false);
        dispatch(showMessage(true, message, type));
      }
    });
  };

  const onUseDefault = () => {
    if (user.image.url === 'default') {
      dispatch(showMessage(true, 'Default image selected', 'info'));
      history.push(PROFILE);
    } else {
      dispatch(removeUserImage(user.image.public_id)).then((res) => {
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

  const uploadImage = (image) => {
    const file = image;
    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', 'profile_images');

    if (user.image.public_id !== 0) {
      dispatch(removeUserImage(user.image.public_id)).then((res) => {
        const { success, message, type } = res.payload;
        if (success) {
          // Add new image
          dispatch(uploadUserImage(data)).then((res) => {
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
      dispatch(uploadUserImage(data)).then((res) => {
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
    dispatch(getAllPlayers());
  };

  return (
    <EditUserImageForm
      loading={loading}
      user={user}
      imageUrl={imageUrl}
      onFileSelect={onFileSelect}
      onUseDefault={onDefaultSelect}
      onSubmit={onSubmit}
    />
  );
};

export default EditUserImageLogic;
