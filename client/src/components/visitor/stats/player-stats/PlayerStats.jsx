import React, { lazy, Suspense } from 'react';
// Layout
import GreyBackground from 'containers/GreyBackground';
import CenteredGrid from 'components/ui/grids/CenteredGrid';
import SectionTitle from 'components/ui/headers/SectionTitle';
import GridItem from 'components/ui/grids/GridItem';
import Spinner from 'components/ui/loading/Spinner';
// Components
const TargetTableLogic = lazy(() => import('./TargetTableLogic'));
const LeaderboardLogic = lazy(() => import('./LeaderboardLogic'));

const PlayerStats = ({ results, players }) => {
  const sections = [
    {
      title: 'Leaderboard',
      component: <LeaderboardLogic results={results} players={players} />,
    },
    { title: 'Targets', component: <TargetTableLogic players={players} /> },
  ];
  return (
    <CenteredGrid dir='row' item='flex-start'>
      {sections.map((section) => (
        <GridItem key={section.title}>
          <GreyBackground placeholder>
            <Suspense fallback={<Spinner isButton />}>
              <SectionTitle title={section.title} />
              {section.component}
            </Suspense>
          </GreyBackground>
        </GridItem>
      ))}
    </CenteredGrid>
  );
};

export default PlayerStats;
