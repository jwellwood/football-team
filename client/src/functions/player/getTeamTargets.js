import { mapReduce } from '../index';

export const getTeamTargets = (players) => {
  const targetApps = mapReduce(players, 'appsTarget');
  const targetGoals = mapReduce(players, 'goalsTarget');
  const targetAssists = mapReduce(players, 'assistsTarget');
  const targetTotal = targetApps + targetGoals + targetAssists;
  return { targetApps, targetGoals, targetAssists, targetTotal };
};
