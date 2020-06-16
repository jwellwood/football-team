import React, { lazy, Suspense } from 'react';
// Layout
import Spinner from 'components/ui/loading/Spinner';
import SectionTitle from 'components/ui/text/SectionTitle';
import PlayerResultsLogic from './sections/PlayerResultsLogic';
import CustomTabs from 'components/ui/tabs/CustomTabs';
import CustomIcon from 'components/ui/icons/CustomIcon';
// Sections
const PlayerVersus = lazy(() => import('./sections/PlayerVersusLogic'));
const StatsOverviewLogic = lazy(() => import('./sections/StatsOverviewLogic'));
const PlayerPercentages = lazy(() => import('./sections/PlayerPercentages'));
const PlayerAverages = lazy(() => import('./sections/PlayerAveragesLogic'));
const TargetsOverview = lazy(() => import('./sections/TargetsOverviewLogic'));
const DetailsOverview = lazy(() => import('./sections/DetailsOverview'));

const Player = ({ player, results }) => {
  const tabs = [
    {
      label: <CustomIcon icon='user' />,
      component: <DetailsOverview player={player} />,
    },
    {
      label: <CustomIcon icon='list-ul' />,
      component: (
        <>
          <PlayerResultsLogic player={player} />
          <StatsOverviewLogic player={player} />
        </>
      ),
    },
    {
      label: <CustomIcon icon='bullseye' />,
      component: (
        <>
          <TargetsOverview player={player} /> <PlayerVersus player={player} />
        </>
      ),
    },
    {
      label: <CustomIcon icon='chart-pie' />,
      component: (
        <>
          <PlayerPercentages results={results} player={player} />
          <PlayerAverages player={player} />
        </>
      ),
    },
  ];

  return (
    <>
      <SectionTitle title={player.name} />
      <Suspense fallback={<Spinner />}>
        <CustomTabs tabs={tabs} centered />
      </Suspense>
    </>
  );
};

export default Player;
