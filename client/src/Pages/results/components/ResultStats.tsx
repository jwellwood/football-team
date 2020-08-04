import React, { lazy, Suspense, ReactElement } from 'react';
import { IResult } from 'shared/types';
import ToggleSwitch from 'components/ui/buttons/ToggleSwitch';
import Spinner from 'lib/components/loading/Spinner';
import CustomTabs from 'lib/components/tabs/CustomTabs';
import CustomIcon from 'lib/components/icons/CustomIcon';

const ResultPercentages = lazy(() => import('./ResultPercentages'));
const ResultVersus = lazy(() => import('./ResultVersus'));
const ResultVersusNegative = lazy(() => import('./ResultVersusNegative'));
const ResultLineGraph = lazy(() => import('./ResultLineGraph'));

interface Props {
  results: IResult[];
  toggleForfeits: () => void;
  includeForfeits: boolean;
}

interface IResultStatTab {
  label: ReactElement | string;
  component: ReactElement;
}

const ResultStats: React.FC<Props> = ({
  results,
  toggleForfeits,
  includeForfeits,
}) => {
  if (!includeForfeits) {
    results = results.filter((result: IResult) => !result.isForfeit);
  }

  const tabs: IResultStatTab[] = [
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
      <Suspense fallback={<Spinner isButton />}>
        <CustomTabs tabs={tabs} />
      </Suspense>
    </>
  );
};

export default ResultStats;
