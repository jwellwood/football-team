import { mapper, getMost, getFewest } from '../index';
import { parseDate } from 'components/utils/date';

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
