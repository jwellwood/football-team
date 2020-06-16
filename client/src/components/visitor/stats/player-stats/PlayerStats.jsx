import React, { lazy, Suspense } from 'react';
// Layout
import Spinner from 'components/ui/loading/Spinner';
import CustomTabs from 'components/ui/tabs/CustomTabs';
import CustomIcon from 'components/ui/icons/CustomIcon';
// Components
const TargetTableLogic = lazy(() => import('./TargetTableLogic'));
const LeaderboardLogic = lazy(() => import('./LeaderboardLogic'));
const TeamTargetsLogic = lazy(() => import('./TeamTargetsLogic'));

const PlayerStats = ({ results, players }) => {
  const tabs = [
    {
      label: <CustomIcon icon='star' />,
      component: <LeaderboardLogic results={results} players={players} />,
    },
    {
      label: <CustomIcon icon='bullseye' />,
      component: <TargetTableLogic players={players} />,
    },
    {
      label: <CustomIcon icon='shield-alt' />,
      component: <TeamTargetsLogic players={players} />,
    },
  ];

  return (
    <Suspense fallback={<Spinner isButton />}>
      <CustomTabs tabs={tabs} />
    </Suspense>
  );
};

export default PlayerStats;
