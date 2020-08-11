import { getPercentage } from 'utils/helpers';
import { getTotals } from 'app/player/functions';
import { IPlayer } from 'shared/types';

export const getTargetStats = (
  player: IPlayer,
  stat: any, // TODO
  targetType: number
) => {
  return {
    total: getTotals(player)[stat],
    target: targetType,
    percentage:
      targetType === 0
        ? 0
        : getPercentage(getTotals(player)[stat], targetType, 1),
  };
};
