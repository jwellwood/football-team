import { mapper, getMost, getFewest } from 'utils/helpers';
import { parseDate } from 'utils/helpers';
import { IResult } from 'shared/types';

export const getResultVersus = (results: IResult[]) => {
  // Get all of the stats
  const getGoals = mapper(results, 'teamGoals');
  const getConceded = mapper(results, 'opponentGoals');
  const getWinDifference = (matches: IResult[]) =>
    matches.map((res: any) => +res.teamGoals - +res.opponentGoals);
  const getDefeatDifference = (matches: IResult[]) =>
    matches.map((res: any) => +res.opponentGoals - +res.teamGoals);

  // DIFF
  const defeats = results.filter((result) => result.points === 0);
  const wins = results.filter((result) => result.points === 3);
  const getWinDiff = getWinDifference(wins);
  const getLossDiff = getDefeatDifference(defeats);

  // Get the biggest/smallest
  const mostGoals: number = getMost(getGoals);
  const mostConc: number = getMost(getConceded);
  const fewestGoals = getFewest(getGoals);
  // DIFF
  const biggestWinDiff = getMost(getWinDiff);
  const biggestLossDiff = getMost(getLossDiff);
  const cleanSheets = results.filter((res: any) => !res.opponentGoals);
  // Link that to a result
  const filterResults = (arr: IResult[], most: number, stat: any) =>
    arr.filter((elem: any) => most === elem[stat]);
  const topGoalResults = filterResults(results, mostGoals, 'teamGoals');
  const topConcededResults = filterResults(results, mostConc, 'opponentGoals');
  const fewestGoalsResults = filterResults(results, fewestGoals, 'teamGoals');
  // DIFF
  const biggestWinResults = wins.filter(
    (res: any) => +res.teamGoals - +res.opponentGoals === biggestWinDiff
  );
  const biggestDefeatResults = defeats.filter(
    (res: any) => +res.opponentGoals - +res.teamGoals === biggestLossDiff
  );

  // Return opponent name, score and date
  const oppArr = (results: IResult[]) =>
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
