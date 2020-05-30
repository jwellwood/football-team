import React, { useMemo } from 'react';
// Functions
import { getResultTotals } from 'functions/results';
// Components
import CustomIcon from 'components/ui/icons/CustomIcon';
import ResultsTotals from './ResultsTotals';

const ResultsTotalsLogic = ({ results }) => {
  const resultTotals = useMemo(() => getResultTotals(results), [results]);
  const goalDifference = resultTotals.goals - resultTotals.conceded;

  const latestResults = results
    .slice(0, 5)
    .map((result) => result.points)
    .reverse();

  const data = [
    { title: 'Pl', value: resultTotals.played, divider: true },
    { title: 'W', value: resultTotals.wins },
    { title: 'D', value: resultTotals.draws },
    { title: 'L', value: resultTotals.losses, divider: true },
    {
      title: <CustomIcon icon='plus' size='xs' />,
      value: resultTotals.goals,
    },
    {
      title: <CustomIcon icon='minus' size='sm' />,
      value: resultTotals.conceded,
    },
    {
      title: 'GD',
      value: goalDifference,
      divider: true,
    },
    {
      title: 'Form',
      value: latestResults,
    },
  ];

  return <ResultsTotals data={data} showStatsButton={true} />;
};

export default ResultsTotalsLogic;
