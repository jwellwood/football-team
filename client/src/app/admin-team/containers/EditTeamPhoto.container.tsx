import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  getTeam,
  updateTeamPhoto,
  uploadTeamPhoto,
  removeAdminImage,
} from 'reduxStore/team';
import { showAlert } from 'reduxStore/alert';
import { admin_routes } from 'router';
import { ITeam } from 'shared/types';
import EditTeamPhotoForm from '../components/EditTeamPhotoForm';
import { RootState, AppDispatch } from 'reduxStore/rootReducer';
import { base_file } from '../utils/base_file';

export default () => {
  const team: ITeam = useSelector((state: RootState) => state.team.data);
  const { teamPhoto } = team;
  const history = useHistory();
  const dispatch: AppDispatch = useDispatch();
  // State
  const [image, setImage] = useState<File>(base_file);
  const [imageUrl, setImageUrl] = useState<string>(teamPhoto!.url);
  const [loading, setLoading] = useState<boolean>(false);

  // Functions
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

  const onUseDefault = () => {
    if (teamPhoto!.url === 'default') {
      dispatch(showAlert(true, 'Default image selected', 'info'));
      getTeam();
      history.push(admin_routes.ADMIN);
    } else {
      dispatch(removeAdminImage(teamPhoto!.public_id)).then((res: any) => {
        const { success, message, type } = res.payload;
        if (success) {
          updatePhotoOnDatabase('default', 0);
        } else {
          setLoading(false);
          dispatch(showAlert(true, message, type));
        }
      });
    }
  };

  const updatePhotoOnDatabase = (url: string, public_id: number) => {
    dispatch(updateTeamPhoto({ url, public_id, id: team._id! })).then(
      (res: any) => {
        const { success, message, type } = res.payload;
        if (success) {
          setLoading(false);
          dispatch(showAlert(true, message, type));
          getTeam();
          history.push(admin_routes.ADMIN);
        } else {
          setLoading(false);
          dispatch(showAlert(true, message, type));
        }
      }
    );
  };

  const uploadImage = (image: File) => {
    const file: File = image;
    const data: FormData = new FormData();
    data.append('file', file);
    data.append('upload_preset', 'profile_images');

    if (teamPhoto!.public_id !== 0) {
      dispatch(removeAdminImage(teamPhoto!.public_id)).then((res: any) => {
        const { success, message, type } = res.payload;
        if (success) {
          // Add new image
          dispatch(uploadTeamPhoto(data)).then((res: any) => {
            const { success, message, type, url, public_id } = res.payload;
            if (success) {
              updatePhotoOnDatabase(url, public_id);
            } else {
              dispatch(showAlert(true, message, type));
            }
          });
        } else {
          setLoading(false);
          dispatch(showAlert(true, type, message));
        }
      });
    } else {
      dispatch(uploadTeamPhoto(data)).then((res: any) => {
        const { success, message, type, url, public_id } = res.payload;
        if (success) {
          updatePhotoOnDatabase(url, public_id);
        } else {
          dispatch(showAlert(true, message, type));
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
