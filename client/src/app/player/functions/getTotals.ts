import { mapReduce, filterer, getPercentage } from 'utils/helpers';
import { IPlayer, IPlayerMatchPlayed } from 'shared/types';

export const playerApps = (player: IPlayer) => player.matchesPlayed.length;
export const playerGoals = (player: IPlayer) =>
  mapReduce(player.matchesPlayed, 'goals');
export const playerAssists = (player: IPlayer) =>
  mapReduce(player.matchesPlayed, 'assists');
export const playerConceded = (player: IPlayer) =>
  mapReduce(player.matchesPlayed, 'conceded');
export const playerOwnGoals = (player: IPlayer) =>
  mapReduce(player.matchesPlayed, 'ownGoals');
export const playerPensScored = (player: IPlayer) =>
  mapReduce(player.matchesPlayed, 'pensScored');
export const playerPensMissed = (player: IPlayer) =>
  mapReduce(player.matchesPlayed, 'pensMissed');
export const playerYellowCards = (player: IPlayer) =>
  mapReduce(player.matchesPlayed, 'yellowCards');
export const playerMVPs = (player: IPlayer) =>
  filterer(player.matchesPlayed, 'mvp');
export const playerRedCards = (player: IPlayer) =>
  filterer(player.matchesPlayed, 'redCard');

export const getTotals = (player: IPlayer) => {
  const matches: IPlayerMatchPlayed[] = player.matchesPlayed;
  // const results = matches.map((match) => match.result);
  // const wonMatches = results.filter((res: any) => res.points === 3).length;
  const wonMatches: number = matches.reduce(
    (won: IPlayerMatchPlayed[], match) => {
      if (match.result.points === 3) {
        won.push(match);
      }
      return won;
    },
    []
  ).length;
  return {
    apps: matches.length,
    goals: mapReduce(matches, 'goals'),
    assists: mapReduce(matches, 'assists'),
    conceded: mapReduce(matches, 'conceded'),
    ownGoals: mapReduce(matches, 'ownGoals'),
    pensScored: mapReduce(matches, 'pensScored'),
    pensMissed: mapReduce(matches, 'pensMissed'),
    yellowCards: mapReduce(matches, 'yellowCards'),
    mvps: filterer(matches, 'mvp'),
    redCards: filterer(matches, 'redCard'),
    winPercentage: getPercentage(wonMatches, matches.length, 1),
  };
};
