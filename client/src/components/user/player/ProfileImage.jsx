import React from 'react';
// Routes
import { EDIT_PROFILE_IMAGE } from 'router/route_names';
// Components
import CircularImage from 'components/ui/images/CircularImage';
import EditImageButton from 'components/ui/buttons/EditImageButton';

const ProfileImage = ({ user }) => {
  const { image, canEdit } = user;
  return (
    <>
      <CircularImage image={image.url} isPlayer />
      <EditImageButton link={!canEdit.photo ? 'locked' : EDIT_PROFILE_IMAGE} />
    </>
  );
};

export default ProfileImage;
