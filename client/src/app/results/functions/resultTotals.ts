import { getResultTotals } from './getResultTotals';
import { IResult } from 'shared/types';

export const totalWins = (results: IResult[]) => getResultTotals(results).wins;
export const totalDraws = (results: IResult[]) =>
  getResultTotals(results).draws;
export const totalLosses = (results: IResult[]) =>
  getResultTotals(results).losses;
export const totalGoals = (results: IResult[]) =>
  getResultTotals(results).goals;
export const totalConceded = (results: IResult[]) =>
  getResultTotals(results).conceded;
export const totalPoints = (results: IResult[]) =>
  getResultTotals(results).points;
