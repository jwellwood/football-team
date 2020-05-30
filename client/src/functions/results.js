import { parseDate } from 'components/utils/date';

import {
  getPercentage,
  mapper,
  mapReduce,
  getMost,
  getFewest,
  getAvg,
} from 'functions';

export const getResultSymbol = (points) => {
  switch (points) {
    case 3:
      return 'W';
    case 1:
      return 'D';
    case 0:
      return 'L';
    default:
      return '?';
  }
};

export const getResultsWithoutForfeits = (results) => {
  return results.filter((result) => !result.isForfeit);
};
export const getResultTotals = (results) => {
  const played = results.length;
  const wins = results.filter((res) => +res.points === 3).length;
  const draws = results.filter((res) => +res.points === 1).length;
  const losses = results.filter((res) => +res.points === 0).length;
  const goals = mapReduce(results, 'teamGoals');
  const conceded = mapReduce(results, 'opponentGoals');
  const points = mapReduce(results, 'points');
  return {
    played,
    wins,
    draws,
    losses,
    goals,
    conceded,
    points,
  };
};

const totalWins = (results) => getResultTotals(results).wins;
const totalDraws = (results) => getResultTotals(results).draws;
const totalLosses = (results) => getResultTotals(results).losses;
const totalGoals = (results) => getResultTotals(results).goals;
const totalConceded = (results) => getResultTotals(results).conceded;
const totalPoints = (results) => getResultTotals(results).points;

export const getResultPercentages = (results) => {
  const winPercentage = getPercentage(totalWins(results), results.length, 0);
  const drawPercentage = getPercentage(totalDraws(results), results.length, 0);
  const lossPercentage = getPercentage(totalLosses(results), results.length, 0);
  return { winPercentage, drawPercentage, lossPercentage };
};

export const getResultAverages = (results) => {
  // Get points per game, goals for, goals against, goal difference
  const played = results.length;
  const pointsPerGame = getAvg(totalPoints(results), played);
  const avgGoals = getAvg(totalGoals(results), played);
  const avgConceded = getAvg(totalConceded(results), played);
  const avgDiff = (avgGoals - avgConceded).toFixed(2);
  return { pointsPerGame, avgGoals, avgConceded, avgDiff };
};

export const getResultVersus = (results) => {
  // Get all of the stats
  const getGoals = mapper(results, 'teamGoals');
  const getConceded = mapper(results, 'opponentGoals');
  const getWinDifference = (matches) =>
    matches.map((res) => +res.teamGoals - +res.opponentGoals);
  const getDefeatDifference = (matches) =>
    matches.map((res) => +res.opponentGoals - +res.teamGoals);

  // DIFF
  const defeats = results.filter((result) => result.points === 0);
  const wins = results.filter((result) => result.points === 3);
  const getWinDiff = getWinDifference(wins);
  const getLossDiff = getDefeatDifference(defeats);

  // Get the biggest/smallest
  const mostGoals = getMost(getGoals);
  const mostConc = getMost(getConceded);
  const fewestGoals = getFewest(getGoals);
  // DIFF
  const biggestWinDiff = getMost(getWinDiff);
  const biggestLossDiff = getMost(getLossDiff);
  const cleanSheets = results.filter((res) => !res.opponentGoals);
  // Link that to a result
  const filterResults = (arr, most, stat) =>
    arr.filter((elem) => most === elem[stat]);
  const topGoalResults = filterResults(results, mostGoals, 'teamGoals');
  const topConcededResults = filterResults(results, mostConc, 'opponentGoals');
  const fewestGoalsResults = filterResults(results, fewestGoals, 'teamGoals');
  // DIFF
  const biggestWinResults = wins.filter(
    (res) => +res.teamGoals - +res.opponentGoals === biggestWinDiff
  );
  const biggestDefeatResults = defeats.filter(
    (res) => +res.opponentGoals - +res.teamGoals === biggestLossDiff
  );

  // Return opponent name, score and date
  const oppArr = (results) =>
    results.map((opp) => {
      return {
        name: opp.opponentName,
        date: parseDate(opp.date),
        scored: opp.teamGoals,
        conceded: opp.opponentGoals,
      };
    });
  return {
    mostGoals,
    mostConc,
    fewestGoals,
    cleanSheets: cleanSheets.length,
    biggestWinDiff,
    biggestLossDiff,
    cleanSheetsDetails: oppArr(cleanSheets),
    mostScoredDetails: oppArr(topGoalResults),
    mostConcededDetails: oppArr(topConcededResults),
    fewestGoalsDetails: oppArr(fewestGoalsResults),
    biggestWinResults: oppArr(biggestWinResults),
    biggestDefeatResults: oppArr(biggestDefeatResults),
  };
};

export const getPenaltyStats = (results) => {
  const players = results.flatMap((result) => result.players);
  const pensScored = mapReduce(players, 'pensScored');
  const pensMissed = mapReduce(players, 'pensMissed');
  const totalPens = pensScored + pensMissed;
  return { pensScored, pensMissed, totalPens };
};

export const getGoalAverages = (results) => {
  const goalsFor = getAvg(totalGoals(results) / results.length);
  const goalsAgainst = getAvg(totalConceded(results) / results.length);
  const goalDiffAvg = (goalsFor - goalsAgainst).toFixed(2);
  return { goalsFor, goalsAgainst, goalDiffAvg };
};
