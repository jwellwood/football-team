import React, { lazy, Suspense } from 'react';
// Layout
import Spinner from 'components/ui/loading/Spinner';
import CenteredGrid from 'components/ui/grids/CenteredGrid';
import GridItem from 'components/ui/grids/GridItem';
import SectionTitle from 'components/ui/headers/SectionTitle';
import GreyBackground from 'containers/GreyBackground';
// Sections
const PlayerVersus = lazy(() => import('./sections/PlayerVersusLogic'));
const StatsOverviewLogic = lazy(() => import('./sections/StatsOverviewLogic'));
const PlayerPercentages = lazy(() => import('./sections/PlayerPercentages'));
const PlayerAverages = lazy(() => import('./sections/PlayerAveragesLogic'));
const TargetsOverview = lazy(() => import('./sections/TargetsOverviewLogic'));
const DetailsOverview = lazy(() => import('./sections/DetailsOverview'));

const Player = ({ player, results }) => {
  const data = [
    {
      title: player.name,
      component: <DetailsOverview player={player} />,
    },
    { title: 'Stats', component: <StatsOverviewLogic player={player} /> },
    { title: 'Targets', component: <TargetsOverview player={player} /> },
    {
      title: 'Percentages',
      component: <PlayerPercentages results={results} player={player} />,
    },
    { title: 'Averages', component: <PlayerAverages player={player} /> },
    { title: 'Versus', component: <PlayerVersus player={player} /> },
  ];
  return (
    <CenteredGrid dir='row' item='flex-start'>
      {data.map((item, i) => (
        <GridItem key={i}>
          <GreyBackground>
            <Suspense fallback={<Spinner isButton />}>
              <SectionTitle title={item.title} />
              {item.component}
            </Suspense>
          </GreyBackground>
        </GridItem>
      ))}
    </CenteredGrid>
  );
};

export default Player;
