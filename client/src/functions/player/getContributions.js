import { getPercentage, mapReduce } from '../index';
import { getTotals } from './getTotals';

export const getContributions = (player, results) => {
  const matches = player.matchesPlayed;
  const percent = (stat) => getPercentage(stat, results.length);
  const percentageOfPlayersMatches = (stat) =>
    getPercentage(stat, matches.length);
  const totalResultGoals = mapReduce(results, 'teamGoals');
  const scoredIn = matches.filter((m) => m.goals > 0).length;
  const assistedIn = matches.filter((m) => m.assists > 0).length;
  const either = matches.filter((m) => m.goals > 0 || m.assists > 0).length;
  const both = matches.filter((m) => m.goals > 0 && m.assists > 0).length;
  const combinedStats = getTotals(player).goals + getTotals(player).assists;
  return {
    apps: percent(matches.length, results.length, 1),
    goals: percentageOfPlayersMatches(scoredIn),
    assists: percentageOfPlayersMatches(assistedIn),
    either: percentageOfPlayersMatches(either),
    both: percentageOfPlayersMatches(both),
    overall: getPercentage(combinedStats, totalResultGoals),
  };
};
