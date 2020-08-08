import { mapReduce } from 'utils/helpers';
import { IPlayer } from 'shared/types';

export const getTeamTargets = (players: IPlayer[]) => {
  const targetApps: number = mapReduce(players, 'appsTarget');
  const targetGoals: number = mapReduce(players, 'goalsTarget');
  const targetAssists: number = mapReduce(players, 'assistsTarget');
  const targetTotal: number = targetApps + targetGoals + targetAssists;
  return { targetApps, targetGoals, targetAssists, targetTotal };
};
