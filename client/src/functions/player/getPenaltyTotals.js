import { getPercentage } from '../index';
import { getTotals } from './getTotals';

export const getPenaltyTotals = (player, results) => {
  const pensScored = getTotals(player).pensScored;
  const pensMissed = getTotals(player).pensMissed;
  const pensTaken = pensScored + pensMissed;
  const penScoredPercent = getPercentage(pensScored, pensTaken, 0);
  const teamPens = getPenaltyStats(results).totalPens;
  const percentOfTeamPensTaken = getPercentage(pensTaken, teamPens, 0);
  return { pensTaken, penScoredPercent, percentOfTeamPensTaken };
};
