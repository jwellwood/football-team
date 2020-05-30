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
  const { canEdit } = user;

  return (
    <ProfileSection link={!canEdit.details ? 'locked' : EDIT_PLAYER}>
      <CenteredGrid dir='row'>
        <GridItem sm={4}>
          <ProfileImage user={user} />
        </GridItem>
        <GridItem sm={8}>
          <Details user={user} />
        </GridItem>
      </CenteredGrid>
    </ProfileSection>
  );
};

export default PlayerDetails;
