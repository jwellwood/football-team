import React, { useMemo } from 'react';
import { getResultAverages } from 'app/results/functions';
import { theme } from 'lib/theme';
import { IPlayer, IResult } from 'shared/types';
import {
  IPlayerAveragesTableData,
  IPlayerAveragesListData,
} from '../shared/types';
import { IBarGraphData } from 'lib/chartjs';
import { BarGraph } from 'lib/chartjs/graphs';
import { Placeholder } from 'components/typography';
import AveragesList from '../components/AveragesList';
import PlayerAverages from '../components/PlayerAverages';
import { getPerGameStats } from '../functions';

interface Props {
  player: IPlayer;
}

interface IPlayerAverages {
  pointsPerGame: number;
  avgGoals: number;
  avgConceded: number;
  avgDiff: string;
}

interface IPlayerPerGameStats {
  assists: string;
  conceded: string;
  goals: string;
}

const PlayerAveragesLogic: React.FC<Props> = ({ player }) => {
  const { success, error } = theme.palette;
  const { matchesPlayed } = player;

  const playerResults: IResult[] = matchesPlayed.map((match) => match.result);
  const averages: IPlayerAverages = useMemo(
    () => getResultAverages(playerResults),
    [playerResults]
  );

  const perGame: IPlayerPerGameStats = useMemo(() => getPerGameStats(player), [
    player,
  ]);

  const { avgGoals, avgConceded, avgDiff } = averages;
  const { goals, assists, conceded } = perGame;

  const backgroundColor: string = +avgDiff > 0 ? success.light : error.light;

  const data: IBarGraphData = {
    labels: ['Goals', 'Conceded', 'Difference'],
    datasets: [
      {
        data: [avgGoals, -Math.abs(avgConceded), avgDiff],
        backgroundColor: [success.light, error.main, backgroundColor],
        borderWidth: 1,
      },
    ],
  };

  const listData: IPlayerAveragesListData[] = [
    { title: 'Goals / game', value: goals },
    { title: 'Assists / game', value: assists },
    { title: 'Conceded / game', value: conceded },
  ];

  const tables: IPlayerAveragesTableData[] = [
    { title: 'Individual', component: <AveragesList listData={listData} /> },
    {
      title: 'Team',
      component: <BarGraph data={data} />,
    },
  ];

  return matchesPlayed.length ? (
    <PlayerAverages tables={tables} />
  ) : (
    <Placeholder />
  );
};

export default PlayerAveragesLogic;
