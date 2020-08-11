import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  updateUserImage,
  removeUserImage,
  uploadUserImage,
} from 'reduxStore/user/user_actions';
import { showMessage } from 'reduxStore/app/message_actions';
import { getAllPlayers } from 'reduxStore/squad/squad_actions';
import { user_routes } from 'router';
import { IUserData } from 'shared/types';
import EditUserImage from '../components/EditUserImage.component';
import { AppDispatch } from 'reduxStore/rootReducer';
import { base_file } from 'app/admin-team/utils/base_file';

export interface IAuthState {
  auth: any;
}

export default () => {
  const user: IUserData = useSelector(
    (state: IAuthState) => state.auth.userData
  );
  const history = useHistory();
  const dispatch: AppDispatch = useDispatch();
  // State
  const [image, setImage] = useState<File>(base_file);
  const [imageUrl, setImageUrl] = useState<string>(user.image.url);
  const [loading, setLoading] = useState<boolean>(false);

  // Functions
  //Shows the selected file to the user, and updates the state to match the filepath
  const onFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const imageFile: File = e.target.files[0];
      const reader: FileReader = new FileReader();
      reader.readAsDataURL(imageFile);
      reader.onloadend = () => {
        const newImageUrl: string = reader.result as string;
        setImageUrl(newImageUrl);
      };
      setImage(imageFile);
    }
  };

  const onDefaultSelect = () => {
    setImageUrl('default');
    setImage(base_file);
  };

  const updatePhotoOnDatabase = (url: string, public_id: number) => {
    dispatch(updateUserImage({ url, public_id })).then((res: any) => {
      const { success, message, type } = res.payload;
      if (success) {
        setLoading(false);
        dispatch(showMessage(true, message, type));
        history.push(user_routes.PROFILE);
      } else {
        setLoading(false);
        dispatch(showMessage(true, message, type));
      }
    });
  };

  const onUseDefault = () => {
    if (user.image.url === 'default') {
      dispatch(showMessage(true, 'Default image selected', 'info'));
      history.push(user_routes.PROFILE);
    } else {
      dispatch(removeUserImage(user.image.public_id)).then((res: any) => {
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

  const uploadImage = (image: File) => {
    const file: File = image;
    const data: FormData = new FormData();
    data.append('file', file);
    data.append('upload_preset', 'profile_images');

    if (user.image.public_id !== 0) {
      dispatch(removeUserImage(user.image.public_id)).then((res: any) => {
        const { success, message, type } = res.payload;
        if (success) {
          // Add new image
          dispatch(uploadUserImage(data)).then((res: any) => {
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
      dispatch(uploadUserImage(data)).then((res: any) => {
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
    <EditUserImage
      loading={loading}
      user={user}
      imageUrl={imageUrl}
      onFileSelect={onFileSelect}
      onUseDefault={onDefaultSelect}
      onSubmit={onSubmit}
    />
  );
};
