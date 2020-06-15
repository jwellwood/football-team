import React, { lazy, Suspense } from 'react';
// Layout
import Spinner from 'components/ui/loading/Spinner';
import CustomTabs from 'components/ui/tabs/CustomTabs';
import CustomIcon from 'components/ui/icons/CustomIcon';
// Sections
const TeamPhoto = lazy(() => import('components/ui/images/TeamPhoto'));
const TrophiesLogic = lazy(() => import('./trophies/TrophiesLogic'));
const HallOfFameLogic = lazy(() => import('./hall-of-fame/HallOfFameLogic'));
const PreviousSeasonsLogic = lazy(() =>
  import('./previous-seasons/PreviousSeasonsLogic')
);

const Team = ({ team }) => {
  const tabs = [
    {
      label: <CustomIcon icon='user-friends' />,
      component: <TeamPhoto image={team.teamPhoto.url} />,
    },
    {
      label: <CustomIcon icon='trophy' />,
      component: <TrophiesLogic team={team} />,
    },
    {
      label: <CustomIcon icon='monument' />,
      component: <PreviousSeasonsLogic team={team} />,
    },
    {
      label: <CustomIcon icon='landmark' />,
      component: <HallOfFameLogic team={team} />,
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
