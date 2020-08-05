import React, { useMemo } from 'react';
import ResultsTotals from 'Pages/results/components/ResultsTotals.component';
import { getResultTotals } from 'functions/results';
import CustomIcon from 'lib/components/icons/CustomIcon';
import { IPlayer, IPlayerMatchResult } from 'shared/types';
import { IResultTotalsData } from 'Pages/results/shared/types';

interface Props {
  player: IPlayer;
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

const PlayerResultsLogic: React.FC<Props> = ({ player }) => {
  const results: IPlayerMatchResult[] = player.matchesPlayed.map(
    (res) => res.result
  );
  const resultTotals: IResultTotalsValuesData = useMemo(
    () => getResultTotals(results),
    [results]
  );
  const goalDifference: number = resultTotals.goals - resultTotals.conceded;

  const latestResults: number[] = results
    .reverse()
    .slice(0, 5)
    .map((result) => result.points)
    .reverse();

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
      value: latestResults,
    },
  ];
  return <ResultsTotals resultsTotals={data} />;
};

export default PlayerResultsLogic;
