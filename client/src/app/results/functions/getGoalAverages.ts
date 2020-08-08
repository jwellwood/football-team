import { getAvg } from 'utils/helpers';
import { totalGoals, totalConceded } from 'app/results/functions/resultTotals';

export const getGoalAverages = (results) => {
  const goalsFor = getAvg(totalGoals(results) / results.length);
  const goalsAgainst = getAvg(totalConceded(results) / results.length);
  const goalDiffAvg = (goalsFor - goalsAgainst).toFixed(2);
  return { goalsFor, goalsAgainst, goalDiffAvg };
};
