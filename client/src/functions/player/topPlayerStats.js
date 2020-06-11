import { sortArr } from '../index';
import { getTotals } from './getTotals';
import { getPerGameStats } from './getPerGameStats';
import { getContributions } from './getContributions';

export const topPlayerStats = (players, stat, type, results) => {
  const getPlayerResults = players.map((player) => {
    let statType = getTotals(player)[stat];
    switch (type) {
      case 'total':
        statType = getTotals(player)[stat];
        break;
      case 'perGame':
        statType = getPerGameStats(player)[stat];
        break;
      case 'contribution':
        statType = getContributions(player, results)[stat];
        break;
      default:
        return statType;
    }
    return {
      stat: statType,
      name: player.name,
    };
  });
  return sortArr(getPlayerResults, 'stat');
};
