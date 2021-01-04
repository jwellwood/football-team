import { ResultStatsKeys, PlayerStatsKeys } from 'shared/types';

export const sortArr: Function = (
  arr: Array<[]>,
  stat: ResultStatsKeys | PlayerStatsKeys
): Array<[]> =>
  [...arr].sort((a: any, b: any) => parseFloat(b[stat]) - parseFloat(a[stat]));
