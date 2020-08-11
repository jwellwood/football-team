import { IResult } from 'shared/types';

export const getRecentForm: Function = (results: IResult[]) =>
  results
    .slice(0, 5)
    .map((result) => result.points)
    .reverse();
