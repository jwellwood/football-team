import React, { lazy, Suspense } from 'react';
// Layout
import Spinner from 'components/ui/loading/Spinner';
import CenteredGrid from 'components/ui/grids/CenteredGrid';
import SectionBackground from 'containers/SectionBackground';
import GridItem from 'components/ui/grids/GridItem';
import SectionTitle from 'components/ui/text/SectionTitle';
// Components
const ScoreBox = lazy(() => import('./ScoreBox'));
const MatchPlayers = lazy(() => import('./MatchPlayers'));
const MatchReport = lazy(() => import('./MatchReport'));
const MvpDisplay = lazy(() => import('./MvpDisplay'));

const Result = ({ result }) => {
  const { players } = result;
  const mvp = players.filter((pl) => pl.mvp);

  const sections = [
    { title: '', component: <ScoreBox result={result} /> },
    {
      title: 'Players',
      component: <MatchPlayers result={result} />,
      align: 'left',
    },
    { title: 'MVP', component: <MvpDisplay mvp={mvp} /> },
    {
      title: 'Match Report',
      component: <MatchReport result={result} />,
      align: 'left',
    },
  ];

  return (
    <SectionBackground placeholder>
      <CenteredGrid dir='row' item='flex-start'>
        {sections.map((section, i) => (
          <GridItem key={section.title + i} align={section.align}>
            <SectionBackground>
              <Suspense fallback={<Spinner isButton />}>
                <SectionTitle title={section.title} />
                {section.component}
              </Suspense>
            </SectionBackground>
          </GridItem>
        ))}
      </CenteredGrid>
    </SectionBackground>
  );
};

export default Result;
