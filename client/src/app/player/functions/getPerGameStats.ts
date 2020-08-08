import { getAvg } from 'utils/helpers';
import { getTotals } from './getTotals';
import { IPlayer, IPlayerMatches } from 'shared/types';

export const getPerGameStats = (player: IPlayer) => {
  const matches: IPlayerMatches[] = player.matchesPlayed;
  const goals: number = getTotals(player).goals;
  const assists: number = getTotals(player).assists;
  const conceded: number = getTotals(player).conceded;
  const perGame = (stat: number) => getAvg(+stat / matches.length, 1);
  return {
    goals: matches.length ? perGame(goals) : 0,
    assists: matches.length ? perGame(assists) : 0,
    conceded: matches.length ? perGame(conceded) : 0,
  };
};
