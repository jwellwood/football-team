import React, { lazy, Suspense } from 'react';
import { Spinner } from 'components/loaders';
import { CustomTabs, ITab } from 'shared/layout/tabs';
import { CustomIcon } from 'lib/icons';
import { ITeam } from 'shared/types';
// Sections
const TeamPhoto = lazy(() => import('./TeamPhoto'));
const TrophiesList = lazy(() => import('./TrophiesList'));
const HallOfFame = lazy(() => import('../containers/HallOfFame.container'));
const PreviousSeasonsLogic = lazy(() =>
  import('../../previous-season/containers/PreviousSeasons.container')
);

interface Props {
  team: ITeam;
}

const Team: React.FC<Props> = ({ team }) => {
  const tabs: ITab[] = [
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
