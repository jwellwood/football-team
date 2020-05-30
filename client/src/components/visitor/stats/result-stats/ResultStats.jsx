import React, { lazy, Suspense } from 'react';
// Layout
import CenteredGrid from 'components/ui/grids/CenteredGrid';
import GridItem from 'components/ui/grids/GridItem';
import GreyBackground from 'containers/GreyBackground';
import SectionTitle from 'components/ui/headers/SectionTitle';
// Components
import ToggleSwitch from 'components/ui/buttons/ToggleSwitch';
import Spinner from 'components/ui/loading/Spinner';
const ResultPercentages = lazy(() => import('./ResultPercentages'));
const ResultVersus = lazy(() => import('./ResultVersus'));
const ResultVersusNegative = lazy(() => import('./ResultVersusNegative'));
const ResultLineGraph = lazy(() => import('./ResultLineGraph'));

const ResultStats = ({ results, toggleForfeits, includeForfeits }) => {
  if (!includeForfeits) {
    results = results.filter((result) => !result.isForfeit);
  }

  const sections = [
    {
      title: 'Overview',
      component: <ResultPercentages results={results} />,
    },
    {
      title: 'Game by Game',
      component: <ResultLineGraph results={results} />,
    },
    { title: 'Versus for', component: <ResultVersus results={results} /> },
    {
      title: 'Versus against',
      component: <ResultVersusNegative results={results} />,
    },
  ];

  return (
    <>
      <ToggleSwitch
        name='includeForfeits'
        checked={includeForfeits}
        onChange={toggleForfeits}
        label='Include forfeits'
      />
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
    </>
  );
};

export default ResultStats;
