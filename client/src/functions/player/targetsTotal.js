import { getPercentage } from '../index';
import { getTotals } from './getTotals';

export const targetsTotal = (player) => {
  const totalTargets =
    +player.appsTarget + +player.goalsTarget + +player.assistsTarget;
  const totalStats =
    getTotals(player).apps +
    getTotals(player).goals +
    getTotals(player).assists;
  const total =
    totalTargets === 0 ? 0 : getPercentage(totalStats, totalTargets, 0);
  return total;
};
