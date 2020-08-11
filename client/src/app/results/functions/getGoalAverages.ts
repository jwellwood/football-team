import { getAvg } from 'utils/helpers';
import { totalGoals, totalConceded } from 'app/results/functions/resultTotals';
import { IResult } from 'shared/types';

export const getGoalAverages = (results: IResult[]) => {
  const goalsFor: number = getAvg(totalGoals(results) / results.length);
  const goalsAgainst: number = getAvg(totalConceded(results) / results.length);
  const goalDiffAvg: string = (goalsFor - goalsAgainst).toFixed(2);
  return { goalsFor, goalsAgainst, goalDiffAvg };
};
