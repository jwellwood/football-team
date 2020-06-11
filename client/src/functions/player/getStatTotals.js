import { getSum } from '../index';
import { getTotals } from './getTotals';

export const getStatTotals = (players) => {
  const totalApps = players
    .map((player) => getTotals(player).apps)
    .reduce(getSum, 0);
  const totalGoals = players
    .map((player) => getTotals(player).goals)
    .reduce(getSum, 0);
  const totalAssists = players
    .map((player) => getTotals(player).assists)
    .reduce(getSum, 0);
  const totalOverall = totalApps + totalGoals + totalAssists;
  return { totalApps, totalGoals, totalAssists, totalOverall };
};
