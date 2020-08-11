import { mapper, getMost } from 'utils/helpers';
import { parseDate } from 'utils/helpers';
import { IPlayer, IPlayerMatchPlayed } from 'shared/types';

export const getVersusStats = (player: IPlayer) => {
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
  const getResultsForTopStats = (
    most: number,
    stat: any // TODO https://stackoverflow.com/questions/57086672/element-implicitly-has-an-any-type-because-expression-of-type-string-cant-b
  ) => matches.filter((elem: any) => most === elem[stat]);
  const topGoalResults = getResultsForTopStats(mostGoals, 'goals');
  const topAssistResults = getResultsForTopStats(mostAssists, 'assists');
  const topConcResults = getResultsForTopStats(mostConc, 'conceded');
  // Get the opponent name
  const oppArr = (results: IPlayerMatchPlayed[]) =>
    results
      .map((res: any) => res.result)
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
