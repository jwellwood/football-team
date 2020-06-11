import { mapReduce } from '../index';

export const getPenaltyStats = (results) => {
  const players = results.flatMap((result) => result.players);
  const pensScored = mapReduce(players, 'pensScored');
  const pensMissed = mapReduce(players, 'pensMissed');
  const totalPens = pensScored + pensMissed;
  return { pensScored, pensMissed, totalPens };
};
