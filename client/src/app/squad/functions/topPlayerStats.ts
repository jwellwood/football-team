import { sortArr } from 'utils/helpers';
import { getTotals } from 'app/player/functions';
import { getPerGameStats } from 'app/player/functions';
import { getContributions } from 'app/player/functions';
import { IPlayer, IResult } from 'shared/types';

export const topPlayerStats = (
  players: IPlayer[],
  stat: string,
  type: string,
  results?: IResult[]
) => {
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
