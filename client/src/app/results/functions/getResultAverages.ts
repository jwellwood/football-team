import { getAvg } from 'utils/helpers';
import { totalPoints, totalGoals, totalConceded } from './resultTotals';

export const getResultAverages = (results) => {
  // Get points per game, goals for, goals against, goal difference
  const played: number = results.length;
  const pointsPerGame: number = getAvg(totalPoints(results), played);
  const avgGoals: number = getAvg(totalGoals(results), played);
  const avgConceded: number = getAvg(totalConceded(results), played);
  const avgDiff: string = (avgGoals - avgConceded).toFixed(2);
  return { pointsPerGame, avgGoals, avgConceded, avgDiff };
};
