import React from 'react';
// Components
import CircularImage from 'components/ui/images/CircularImage';

const ProfileImage = ({ image }) => {
  return <CircularImage image={image.url} isPlayer />;
};

export default ProfileImage;
