import { getPercentage } from 'utils/helpers';
import { getTotals } from 'app/player/functions';
import { IPlayer, IResult } from 'shared/types';

import { mapReduce } from 'utils/helpers';

export const getPenaltyStats = (results: IResult[]) => {
  const players = results.flatMap((result) => result.players);
  const pensScored = mapReduce(players, 'pensScored');
  const pensMissed = mapReduce(players, 'pensMissed');
  const totalPens = pensScored + pensMissed;
  return { pensScored, pensMissed, totalPens };
};

export const getPenaltyTotals = (player: IPlayer, results: IResult[]) => {
  const pensScored: number = getTotals(player).pensScored;
  const pensMissed: number = getTotals(player).pensMissed;
  const pensTaken: number = pensScored + pensMissed;
  const penScoredPercent: number = getPercentage(pensScored, pensTaken, 0);
  const teamPens: number = getPenaltyStats(results).totalPens;
  const percentOfTeamPensTaken: number = getPercentage(pensTaken, teamPens, 0);
  return { pensTaken, penScoredPercent, percentOfTeamPensTaken };
};
