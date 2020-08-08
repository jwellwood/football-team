import React, { useMemo } from 'react';
import { topPlayerStats } from '../functions';
import { IPlayer, IResult } from 'shared/types';
import { ILeaderboardStat, ILeaderboardData } from '../shared/types';
import PlaceholderText from 'lib/components/typography/Placeholder';
import Leaderboard from '../components/Leaderboard.component';

interface Props {
  players: IPlayer[];
  results: IResult[];
}

export default ({ players, results }: Props) => {
  const goals: ILeaderboardStat = useMemo(
    () => topPlayerStats(players, 'goals', 'total'),
    [players]
  );
  const assists: ILeaderboardStat = useMemo(
    () => topPlayerStats(players, 'assists', 'total'),
    [players]
  );
  const mvps: ILeaderboardStat = useMemo(
    () => topPlayerStats(players, 'mvps', 'total'),
    [players]
  );
  const goalsPerGame: ILeaderboardStat = useMemo(
    () => topPlayerStats(players, 'goals', 'perGame'),
    [players]
  );
  const assistsPerGame: ILeaderboardStat = useMemo(
    () => topPlayerStats(players, 'assists', 'perGame'),
    [players]
  );
  const winPercentage: ILeaderboardStat = useMemo(
    () => topPlayerStats(players, 'winPercentage', 'total'),
    [players]
  );
  const overallContribution: ILeaderboardStat = useMemo(
    () => topPlayerStats(players, 'overall', 'contribution', results),
    [players, results]
  );

  const leaderboardData: ILeaderboardData[] = [
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

  return results ? (
    <Leaderboard leaderboardData={leaderboardData} />
  ) : (
    <PlaceholderText />
  );
};
