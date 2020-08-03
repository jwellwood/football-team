import React from 'react';
// Routes
import { user_routes } from 'router';
// Components
import ProfileList from 'components/ui/lists/ProfileList';
import ListWrapper from 'components/ui/lists/ListWrapper';
import SectionContainer from 'shared/layout/SectionContainer';
import { IUserData } from 'shared/types';

interface Props {
  user: IUserData;
}

interface ITargetData {
  text: string;
  value: number;
  secondary?: string;
}

const UserTargets: React.FC<Props> = ({
  user: { appsTarget, goalsTarget, assistsTarget, targetsPerGame, canEdit },
}) => {
  const data: ITargetData[] = [
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

export default UserTargets;
