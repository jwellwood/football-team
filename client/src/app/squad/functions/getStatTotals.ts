import { getSum } from 'utils/helpers';
import { getTotals } from 'app/player/functions';
import { IPlayer } from 'shared/types';

export const getStatTotals = (players: IPlayer[]) => {
  const totalApps: number = players
    .map((player) => getTotals(player).apps)
    .reduce(getSum, 0);
  const totalGoals: number = players
    .map((player) => getTotals(player).goals)
    .reduce(getSum, 0);
  const totalAssists: number = players
    .map((player) => getTotals(player).assists)
    .reduce(getSum, 0);
  const totalOverall: number = totalApps + totalGoals + totalAssists;
  return { totalApps, totalGoals, totalAssists, totalOverall };
};
