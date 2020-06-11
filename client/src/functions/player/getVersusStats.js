import { mapper, getMost } from '../index';
import { parseDate } from 'components/utils/date';

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
