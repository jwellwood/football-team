import React from 'react';
// Components
import ProfileList from 'components/ui/lists/ProfileList';
import ListWrapper from 'components/ui/lists/ListWrapper';
import GreyBackground from 'containers/GreyBackground';
import CircularImage from 'components/ui/images/CircularImage';

const DetailsOverview = ({ player }) => {
  const { squadNumber, position, image, description } = player;

  const data = [
    { text: 'Number', value: squadNumber, noDivider: true },
    { text: 'Position', value: position },
  ];

  return (
    <GreyBackground>
      <CircularImage image={image.url} isPlayer />
      <ListWrapper>
        <ProfileList details={data} />
      </ListWrapper>
      {description ? <GreyBackground>{description}</GreyBackground> : null}
    </GreyBackground>
  );
};

export default DetailsOverview;
