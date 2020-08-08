import { getPercentage } from 'utils/helpers';
import {
  totalWins,
  totalDraws,
  totalLosses,
} from 'app/results/functions/resultTotals';
import { IResult } from 'shared/types';

export const getResultPercentages = (results: IResult[]) => {
  const winPercentage: string = getPercentage(
    totalWins(results),
    results.length,
    0
  );
  const drawPercentage: string = getPercentage(
    totalDraws(results),
    results.length,
    0
  );
  const lossPercentage: string = getPercentage(
    totalLosses(results),
    results.length,
    0
  );
  return { winPercentage, drawPercentage, lossPercentage };
};
