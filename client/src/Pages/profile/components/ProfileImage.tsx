import React from 'react';
// Components
import CircularImage from 'lib/components/images/CircularImage';

interface Props {
  image: {
    url: string;
    public_id: number | string;
  };
}

const ProfileImage: React.FC<Props> = ({ image }) => {
  return <CircularImage image={image.url} isPlayer />;
};

export default ProfileImage;
