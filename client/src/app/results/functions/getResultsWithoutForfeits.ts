import { IResult } from 'shared/types';

export const getResultsWithoutForfeits = (results: IResult[]) => {
  return results.filter((result: IResult) => !result.isForfeit);
};
