import React from 'react';
// Components
import ProfileList from 'components/ui/lists/ProfileList';
import ListWrapper from 'components/ui/lists/ListWrapper';
import SectionBackground from 'shared/layout/SectionBackground';
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
    <SectionBackground>
      <CenteredGrid dir='row'>
        <GridItem sm={6}>
          <CircularImage image={image.url} isPlayer />
        </GridItem>
        <GridItem sm={6}>
          <ListWrapper>
            <ProfileList details={data} />
          </ListWrapper>
        </GridItem>
      </CenteredGrid>
      {description ? (
        <SectionBackground>{description}</SectionBackground>
      ) : null}
    </SectionBackground>
  );
};

export default DetailsOverview;
