import React, { lazy, Suspense, ReactElement } from 'react';
// Layout
import Spinner from 'lib/components/loading/Spinner';
import CustomTabs from 'lib/components/tabs/CustomTabs';
import CustomIcon from 'lib/components/icons/CustomIcon';
import { ITeam } from 'shared/types';
// Sections
const TeamPhoto = lazy(() => import('./TeamPhoto'));
const TrophiesList = lazy(() => import('./TrophiesList'));
const HallOfFame = lazy(() => import('../containers/HallOfFame.container'));
const PreviousSeasonsLogic = lazy(() =>
  import('../containers/PreviousSeasons.container')
);

interface Props {
  team: ITeam;
}

interface ITeamTabs {
  label: ReactElement;
  component: ReactElement;
}

const Team: React.FC<Props> = ({ team }) => {
  const tabs: ITeamTabs[] = [
    {
      label: <CustomIcon icon='user-friends' />,
      component: <TeamPhoto image={team.teamPhoto.url} />,
    },
    {
      label: <CustomIcon icon='trophy' />,
      component: <TrophiesList team={team} />,
    },
    {
      label: <CustomIcon icon='monument' />,
      component: <PreviousSeasonsLogic />,
    },
    {
      label: <CustomIcon icon='landmark' />,
      component: <HallOfFame team={team} />,
    },
  ];

  return team ? (
    <Suspense fallback={<Spinner />}>
      <CustomTabs tabs={tabs} />
    </Suspense>
  ) : (
    <Spinner />
  );
};

export default Team;
