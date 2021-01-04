import { PlayerStatsKeys, ResultStatsKeys } from 'shared/types';

export const mapper: Function = (
  arr: Array<{}>,
  stat: PlayerStatsKeys | ResultStatsKeys
) => arr.map((elem: any) => elem[stat]);
