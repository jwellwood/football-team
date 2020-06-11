import { getAvg } from '../index';
import { getTotals } from './getTotals';

export const getPerGameStats = (player) => {
  const matches = player.matchesPlayed;
  const goals = getTotals(player).goals;
  const assists = getTotals(player).assists;
  const conceded = getTotals(player).conceded;
  const perGame = (stat) => getAvg(+stat / matches.length, 1);
  return {
    goals: matches.length ? perGame(goals) : 0,
    assists: matches.length ? perGame(assists) : 0,
    conceded: matches.length ? perGame(conceded) : 0,
  };
};
