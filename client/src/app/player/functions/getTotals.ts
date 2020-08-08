import { mapReduce, filterer, getPercentage } from 'utils/helpers';

export const playerApps = (player) => player.matchesPlayed.length;
export const playerGoals = (player) => mapReduce(player.matchesPlayed, 'goals');
export const playerAssists = (player) =>
  mapReduce(player.matchesPlayed, 'assists');
export const playerConceded = (player) =>
  mapReduce(player.matchesPlayed, 'conceded');
export const playerOwnGoals = (player) =>
  mapReduce(player.matchesPlayed, 'ownGoals');
export const playerPensScored = (player) =>
  mapReduce(player.matchesPlayed, 'pensScored');
export const playerPensMissed = (player) =>
  mapReduce(player.matchesPlayed, 'pensMissed');
export const playerYellowCards = (player) =>
  mapReduce(player.matchesPlayed, 'yellowCards');
export const playerMVPs = (player) => filterer(player.matchesPlayed, 'mvp');
export const playerRedCards = (player) =>
  filterer(player.matchesPlayed, 'redCard');

export const getTotals = (player) => {
  const matches = player.matchesPlayed;
  // const results = matches.map((match) => match.result);
  // const wonMatches = results.filter((res) => res.points === 3).length;
  const wonMatches = matches.reduce((won, match) => {
    if (match.result.points === 3) {
      won.push(match);
    }
    return won;
  }, []).length;
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
    winPercentage: getPercentage(wonMatches, matches.length, 0),
  };
};
