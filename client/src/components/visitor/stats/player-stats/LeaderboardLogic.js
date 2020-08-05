import React, { useMemo } from 'react';
// functions
import { topPlayerStats } from 'functions/player';
// Components
import Leaderboard from './Leaderboard';
import PlaceholderText from 'lib/components/typography/Placeholder';

const LeaderboardLogic = ({ players, results }) => {
  const goals = useMemo(() => topPlayerStats(players, 'goals', 'total'), [
    players,
  ]);
  const assists = useMemo(() => topPlayerStats(players, 'assists', 'total'), [
    players,
  ]);
  const mvps = useMemo(() => topPlayerStats(players, 'mvps', 'total'), [
    players,
  ]);
  const goalsPerGame = useMemo(
    () => topPlayerStats(players, 'goals', 'perGame'),
    [players]
  );
  const assistsPerGame = useMemo(
    () => topPlayerStats(players, 'assists', 'perGame'),
    [players]
  );
  const winPercentage = useMemo(
    () => topPlayerStats(players, 'winPercentage', 'total'),
    [players]
  );
  const overallContribution = useMemo(
    () => topPlayerStats(players, 'overall', 'contribution', results),
    [players, results]
  );

  const data = [
    { title: 'Top Scorer', icon: 'goal', value: goals },
    { title: 'Most Assists', icon: 'assist', value: assists },
    { title: 'Most MVPs', icon: 'mvp', value: mvps },
    { title: 'Most Goals / game', icon: 'goal', value: goalsPerGame },
    { title: 'Most Assists / game', icon: 'assist', value: assistsPerGame },
    { title: 'Best win %', icon: 'percentage', value: winPercentage },
    {
      title: 'Best contribution %',
      icon: 'percentage',
      value: overallContribution,
    },
  ];

  return results ? <Leaderboard data={data} /> : <PlaceholderText />;
};

export default LeaderboardLogic;
