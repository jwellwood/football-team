import React, { lazy, Suspense } from 'react';
// Layout
import Spinner from 'components/ui/loading/Spinner';
import CustomTabs from 'components/ui/tabs/CustomTabs';
// Components
const TargetTableLogic = lazy(() => import('./TargetTableLogic'));
const LeaderboardLogic = lazy(() => import('./LeaderboardLogic'));

const PlayerStats = ({ results, players }) => {
  const tabs = [
    {
      label: 'Leaderboard',
      component: <LeaderboardLogic results={results} players={players} />,
    },
    { label: 'Targets', component: <TargetTableLogic players={players} /> },
  ];

  return (
    <Suspense fallback={<Spinner isButton />}>
      <CustomTabs tabs={tabs} />
    </Suspense>
  );
};

export default PlayerStats;
