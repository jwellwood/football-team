import { getAvg } from '../index';
import { totalPoints, totalGoals, totalConceded } from './resultTotals';

export const getResultAverages = (results) => {
  // Get points per game, goals for, goals against, goal difference
  const played = results.length;
  const pointsPerGame = getAvg(totalPoints(results), played);
  const avgGoals = getAvg(totalGoals(results), played);
  const avgConceded = getAvg(totalConceded(results), played);
  const avgDiff = (avgGoals - avgConceded).toFixed(2);
  return { pointsPerGame, avgGoals, avgConceded, avgDiff };
};
