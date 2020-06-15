import React from 'react';
// Components
import ProfileList from 'components/ui/lists/ProfileList';
import ListWrapper from 'components/ui/lists/ListWrapper';
import GreyBackground from 'containers/GreyBackground';
import CircularImage from 'components/ui/images/CircularImage';
import CenteredGrid from 'components/ui/grids/CenteredGrid';
import GridItem from 'components/ui/grids/GridItem';

const DetailsOverview = ({ player }) => {
  const { squadNumber, position, image, description, yearJoined } = player;

  const data = [
    { text: 'Number', value: squadNumber, noDivider: true },
    { text: 'Position', value: position },
    { text: 'Joined', value: yearJoined },
  ];

  return (
    <GreyBackground>
      <CenteredGrid dir='row'>
        <GridItem sm={6}>
          <GreyBackground>
            <CircularImage image={image.url} isPlayer />
          </GreyBackground>
        </GridItem>
        <GridItem sm={6}>
          <GreyBackground>
            <ListWrapper>
              <ProfileList details={data} />
            </ListWrapper>
          </GreyBackground>
        </GridItem>
      </CenteredGrid>
      {description ? <GreyBackground>{description}</GreyBackground> : null}
    </GreyBackground>
  );
};

export default DetailsOverview;
