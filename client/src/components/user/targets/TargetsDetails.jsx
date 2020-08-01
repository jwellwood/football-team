import React from 'react';
// Routes
import { user_routes } from 'router';
// Components
import ProfileList from 'components/ui/lists/ProfileList';
import ListWrapper from 'components/ui/lists/ListWrapper';
import SectionContainer from 'containers/SectionContainer';

const TargetDetails = ({ user }) => {
  const {
    appsTarget,
    goalsTarget,
    assistsTarget,
    targetsPerGame,
    canEdit,
  } = user;

  const data = [
    { text: 'Apps', value: appsTarget },
    {
      text: 'Goals',
      value: goalsTarget,
      secondary: appsTarget ? `${targetsPerGame.goals}  / game` : null,
    },
    {
      text: 'Assists',
      value: assistsTarget,
      secondary: appsTarget ? `${targetsPerGame.assists} / game` : null,
    },
  ];
  return (
    <SectionContainer
      title='Targets'
      link={!canEdit.targets ? 'locked' : user_routes.EDIT_TARGETS}
    >
      <ListWrapper>
        <ProfileList details={data} />
      </ListWrapper>
    </SectionContainer>
  );
};

export default TargetDetails;
