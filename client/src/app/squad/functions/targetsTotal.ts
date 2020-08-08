import { getPercentage } from 'utils/helpers';
import { getTotals } from 'app/player/functions';
import { IPlayer } from 'shared/types';

export const targetsTotal = (player: IPlayer) => {
  const totalTargets: number =
    +player.appsTarget + +player.goalsTarget + +player.assistsTarget;
  const totalStats: number =
    getTotals(player).apps +
    getTotals(player).goals +
    getTotals(player).assists;
  const total: number =
    totalTargets === 0 ? 0 : getPercentage(totalStats, totalTargets, 0);
  return total;
};
