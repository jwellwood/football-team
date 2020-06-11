import { getPercentage } from '../index';
import { getTotals } from './getTotals';

export const getTargetStats = (player, stat, targetType) => {
  return {
    total: getTotals(player)[stat],
    target: targetType,
    percentage:
      targetType === 0
        ? 0
        : getPercentage(getTotals(player)[stat], targetType, 0),
  };
};
