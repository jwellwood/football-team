import { mapReduce } from 'utils/helpers';
import { IResult } from 'shared/types';

export const getResultTotals = (results: IResult[]) => {
  const played: number = results.length;
  const wins: number = results.filter((res: any) => +res.points === 3).length;
  const draws: number = results.filter((res: any) => +res.points === 1).length;
  const losses: number = results.filter((res: any) => +res.points === 0).length;
  const goals: number = mapReduce(results, 'teamGoals');
  const conceded: number = mapReduce(results, 'opponentGoals');
  const points: number = mapReduce(results, 'points');
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
