import {
  getPercentage,
  mapper,
  mapReduce,
  filterer,
  getMost,
  sortArr,
  getAvg,
  getSum,
} from 'functions';
import { getPenaltyStats } from './results';
import { parseDate } from 'components/utils';

export const getTotals = (player) => {
  const matches = player.matchesPlayed;
  const results = matches.map((match) => match.result);
  const wonMatches = results.filter((res) => res.points === 3).length;
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

export const getTargetStats = (player, stat, targetType) => {
  return {
    total: getTotals(player)[stat],
    target: targetType,
    percentage:
      targetType === 0
        ? 0
        : getPercentage(getTotals(player)[stat], targetType, 0),
  };
};

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

export const getTeamTargets = (players) => {
  const targetApps = mapReduce(players, 'appsTarget');
  const targetGoals = mapReduce(players, 'goalsTarget');
  const targetAssists = mapReduce(players, 'assistsTarget');
  const targetTotal = targetApps + targetGoals + targetAssists;
  return { targetApps, targetGoals, targetAssists, targetTotal };
};

export const getStatTotals = (players) => {
  const totalApps = players
    .map((player) => getTotals(player).apps)
    .reduce(getSum, 0);
  const totalGoals = players
    .map((player) => getTotals(player).goals)
    .reduce(getSum, 0);
  const totalAssists = players
    .map((player) => getTotals(player).assists)
    .reduce(getSum, 0);
  const totalOverall = totalApps + totalGoals + totalAssists;
  return { totalApps, totalGoals, totalAssists, totalOverall };
};

export const getPenaltyTotals = (player, results) => {
  const pensScored = getTotals(player).pensScored;
  const pensMissed = getTotals(player).pensMissed;
  const pensTaken = pensScored + pensMissed;
  const penScoredPercent = getPercentage(pensScored, pensTaken, 0);
  const teamPens = getPenaltyStats(results).totalPens;
  const percentOfTeamPensTaken = getPercentage(pensTaken, teamPens, 0);
  return { pensTaken, penScoredPercent, percentOfTeamPensTaken };
};

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

export const getVersusStats = (player) => {
  const matches = player.matchesPlayed;
  // Get all the individual stats
  const getGoals = mapper(matches, 'goals');
  const getAssists = mapper(matches, 'assists');
  const getConceded = mapper(matches, 'conceded');
  // Get the most of all
  const mostGoals = getMost(getGoals);
  const mostAssists = getMost(getAssists);
  const mostConc = getMost(getConceded);
  // Get the corresponding result
  const getResultsForTopStats = (most, stat) =>
    matches.filter((elem) => most === elem[stat]);
  const topGoalResults = getResultsForTopStats(mostGoals, 'goals');
  const topAssistResults = getResultsForTopStats(mostAssists, 'assists');
  const topConcResults = getResultsForTopStats(mostConc, 'conceded');
  // Get the opponent name
  const oppArr = (results) =>
    results
      .map((res) => res.result)
      .map((opp) => {
        return {
          name: opp.opponentName,
          date: parseDate(opp.date),
          scored: opp.teamGoals,
          conceded: opp.opponentGoals,
        };
      });
  return {
    mostGoals,
    mostGoalsVs: oppArr(topGoalResults),
    mostAssists,
    mostAssistsVs: oppArr(topAssistResults),
    mostConc,
    mostConcVs: oppArr(topConcResults),
  };
};

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
