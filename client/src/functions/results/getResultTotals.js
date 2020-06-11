import { mapReduce } from '../index';

export const getResultTotals = (results) => {
  const played = results.length;
  const wins = results.filter((res) => +res.points === 3).length;
  const draws = results.filter((res) => +res.points === 1).length;
  const losses = results.filter((res) => +res.points === 0).length;
  const goals = mapReduce(results, 'teamGoals');
  const conceded = mapReduce(results, 'opponentGoals');
  const points = mapReduce(results, 'points');
  return {
    played,
    wins,
    draws,
    losses,
    goals,
    conceded,
    points,
  };
};
