import React, { lazy, Suspense } from 'react';
// Components
import ToggleSwitch from 'components/ui/buttons/ToggleSwitch';
import Spinner from 'lib/components/loading/Spinner';
import CustomTabs from 'lib/components/tabs/CustomTabs';
import CustomIcon from 'lib/components/icons/CustomIcon';
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
      label: <CustomIcon icon='chart-pie'></CustomIcon>,
      component: <ResultPercentages results={results} />,
    },
    {
      label: <CustomIcon icon='chart-line'></CustomIcon>,
      component: <ResultLineGraph results={results} />,
    },
    {
      label: 'Vs',
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
