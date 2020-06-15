import React from 'react';
// Routes
import { EDIT_PLAYER } from 'router/route_names';
// Components
import CenteredGrid from 'components/ui/grids/CenteredGrid';
import GridItem from 'components/ui/grids/GridItem';
import ProfileSection from '../ProfileSection';
import ProfileImage from './ProfileImage';
import Details from './Details';

const PlayerDetails = ({ user }) => {
  const { name, canEdit, image } = user;

  return (
    <ProfileSection
      title={name}
      link={!canEdit.details ? 'locked' : EDIT_PLAYER}
    >
      <CenteredGrid dir='row'>
        <GridItem sm={4}>
          <ProfileImage image={image} />
        </GridItem>
        <GridItem sm={8}>
          <Details user={user} />
        </GridItem>
      </CenteredGrid>
    </ProfileSection>
  );
};

export default PlayerDetails;
