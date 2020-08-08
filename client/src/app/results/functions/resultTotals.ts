import { getResultTotals } from './getResultTotals';

export const totalWins = (results) => getResultTotals(results).wins;
export const totalDraws = (results) => getResultTotals(results).draws;
export const totalLosses = (results) => getResultTotals(results).losses;
export const totalGoals = (results) => getResultTotals(results).goals;
export const totalConceded = (results) => getResultTotals(results).conceded;
export const totalPoints = (results) => getResultTotals(results).points;
