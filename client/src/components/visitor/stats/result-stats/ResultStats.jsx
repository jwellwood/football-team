import React, { lazy, Suspense } from 'react';
// Components
import ToggleSwitch from 'components/ui/buttons/ToggleSwitch';
import Spinner from 'components/ui/loading/Spinner';
import CustomTabs from 'components/ui/tabs/CustomTabs';
const ResultPercentages = lazy(() => import('./ResultPercentages'));
const ResultVersus = lazy(() => import('./ResultVersus'));
const ResultVersusNegative = lazy(() => import('./ResultVersusNegative'));
const ResultLineGraph = lazy(() => import('./ResultLineGraph'));

const ResultStats = ({ results, toggleForfeits, includeForfeits }) => {
  if (!includeForfeits) {
    results = results.filter((result) => !result.isForfeit);
  }

  const tabs = [
    {
      label: 'Overview',
      component: (
        <>
          <ResultPercentages results={results} />
          <ResultLineGraph results={results} />
        </>
      ),
    },
    {
      label: 'Versus',
      component: (
        <>
          <ResultVersus results={results} />
          <ResultVersusNegative results={results} />
        </>
      ),
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
      <Suspense fallback={<Spinner isButton />}>
        <CustomTabs tabs={tabs} />
      </Suspense>
    </>
  );
};

export default ResultStats;
