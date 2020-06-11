import { getPercentage } from '../index';
import { totalWins, totalDraws, totalLosses } from './resultTotals';

export const getResultPercentages = (results) => {
  const winPercentage = getPercentage(totalWins(results), results.length, 0);
  const drawPercentage = getPercentage(totalDraws(results), results.length, 0);
  const lossPercentage = getPercentage(totalLosses(results), results.length, 0);
  return { winPercentage, drawPercentage, lossPercentage };
};
