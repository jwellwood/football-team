import React, { useMemo } from 'react';
import { getResultTotals } from '../functions';
import CustomIcon from 'lib/icons/CustomIcon';
import ResultsTotals from './ResultsTotals.component';
import { IResultTotalsData } from '../shared/types';
import { IResult } from 'shared/types';
import { getRecentForm } from '../functions';

interface Props {
  results: IResult[];
}

interface IResultTotalsValuesData {
  conceded: number;
  draws: number;
  goals: number;
  losses: number;
  played: number;
  points: number;
  wins: number;
}

const ResultsTotalTable: React.FC<Props> = ({ results }) => {
  const resultTotals: IResultTotalsValuesData = useMemo(
    () => getResultTotals(results),
    [results]
  );
  const goalDifference: number = resultTotals.goals - resultTotals.conceded;
  const latestResultPoints: number[] = getRecentForm(results);

  const data: IResultTotalsData[] = [
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
      value: latestResultPoints,
    },
  ];

  return <ResultsTotals resultsTotals={data} showStatsButton={true} />;
};

export default ResultsTotalTable;
