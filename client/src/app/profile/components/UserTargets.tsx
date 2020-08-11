import React from 'react';
// Routes
import { user_routes } from 'router';
// Components
import ProfileList from 'shared/layout/wrappers/ProfileList';
import { ListWrapper } from 'components/lists';
import { SectionContainer } from 'shared/layout/containers';
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
      secondary: appsTarget ? `${targetsPerGame.goals}  / game` : '',
    },
    {
      text: 'Assists',
      value: assistsTarget,
      secondary: appsTarget ? `${targetsPerGame.assists} / game` : '',
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
