import React, { useMemo } from 'react';
import ResultsTotals from 'components/visitor/results/ResultsTotals';
import { getResultTotals } from 'functions/results';
import CustomIcon from 'components/ui/icons/CustomIcon';

const PlayerResultsLogic = ({ player }) => {
  const results = player.matchesPlayed.map((res) => res.result);
  const resultTotals = useMemo(() => getResultTotals(results), [results]);
  const goalDifference = resultTotals.goals - resultTotals.conceded;

  const latestResults = results
    .reverse()
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
  return <ResultsTotals data={data} />;
};

export default PlayerResultsLogic;
