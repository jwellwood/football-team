import React, { lazy, Suspense } from 'react';
import { IResult } from 'shared/types';
import ToggleSwitch from 'components/inputs/ToggleSwitch';
import { Spinner } from 'components/loaders';
import { CustomTabs, ITab } from 'shared/layout/tabs';
import CustomIcon from 'lib/icons/CustomIcon';

const ResultPercentages = lazy(() => import('./ResultPercentages'));
const ResultVersus = lazy(() => import('./ResultVersus'));
const ResultVersusNegative = lazy(() => import('./ResultVersusNegative'));
const ResultLineGraph = lazy(() => import('./ResultLineGraph'));

interface Props {
  results: IResult[];
  toggleForfeits: () => void;
  includeForfeits: boolean;
}

const ResultStats: React.FC<Props> = ({
  results,
  toggleForfeits,
  includeForfeits,
}) => {
  if (!includeForfeits) {
    results = results.filter((result: IResult) => !result.isForfeit);
  }

  const tabs: ITab[] = [
    {
      label: <CustomIcon icon='chart-pie' />,
      component: <ResultPercentages results={results} />,
    },
    {
      label: <CustomIcon icon='chart-line' />,
      component: <ResultLineGraph results={results} />,
    },
    {
      label: <CustomIcon icon='play' />,
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
      <Suspense fallback={<Spinner isSecondary />}>
        <CustomTabs tabs={tabs} />
      </Suspense>
    </>
  );
};

export default ResultStats;
