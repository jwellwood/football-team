import React from 'react';
import { user_routes } from 'router';
import { CenteredGrid, GridItem } from 'shared/layout/grids';
import ProfileImage from './ProfileImage';
import PlayerInfo from './PlayerInfo';
import { SectionContainer } from 'shared/layout/containers';
import { IUserData } from 'shared/types';

interface Props {
  user: IUserData;
}
const ImageAndInfo: React.FC<Props> = ({ user }) => {
  const { name, canEdit, image } = user;
  return (
    <SectionContainer
      title={name}
      link={!canEdit.details ? 'locked' : user_routes.EDIT_PLAYER}
    >
      <CenteredGrid dir='row'>
        <GridItem sm={4}>
          <ProfileImage image={image} />
        </GridItem>
        <GridItem sm={8}>
          <PlayerInfo user={user} />
        </GridItem>
      </CenteredGrid>
    </SectionContainer>
  );
};

export default ImageAndInfo;
