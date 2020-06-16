import React, { useMemo } from 'react';
// Functions
import { getPerGameStats } from 'functions/player';
import { getResultAverages } from 'functions/results';
// assets
import { theme } from 'assets/theme';
// Components
import BarGraph from 'components/ui/graphs/BarGraph';
import AveragesList from './AveragesList';
import PlayerAverages from './PlayerAverages';
import PlaceholderText from 'components/ui/text/Placeholder';

const PlayerAveragesLogic = ({ player }) => {
  const { success, error } = theme.palette;
  const { matchesPlayed } = player;
  const playerResults = matchesPlayed.map((match) => match.result);
  const averages = useMemo(() => getResultAverages(playerResults), [
    playerResults,
  ]);

  const perGame = useMemo(() => getPerGameStats(player), [player]);

  const { avgGoals, avgConceded, avgDiff } = averages;
  const { goals, assists, conceded } = perGame;

  const backgroundColor = avgDiff > 0 ? success.light : error.light;

  const data = {
    labels: ['Goals', 'Conceded', 'Difference'],
    datasets: [
      {
        data: [avgGoals, -Math.abs(avgConceded), avgDiff],
        backgroundColor: [success.light, error.main, backgroundColor],
        borderWidth: 1,
      },
    ],
  };

  const listData = [
    { title: 'Goals / game', value: goals },
    { title: 'Assists / game', value: assists },
    { title: 'Conceded / game', value: conceded },
  ];

  const tables = [
    { title: 'Individual', component: <AveragesList listData={listData} /> },
    {
      title: 'Team',
      component: (
        <div>
          <BarGraph data={data} />
        </div>
      ),
    },
  ];

  return matchesPlayed.length ? (
    <PlayerAverages tables={tables} />
  ) : (
    <PlaceholderText />
  );
};

export default PlayerAveragesLogic;
