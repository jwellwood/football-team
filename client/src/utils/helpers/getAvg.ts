export const getAvg: Function = (
  stat: any,
  total: number,
  fix: number = 2
): string => {
  if (total === 0) return '0.00';
  return (stat / total).toFixed(fix);
};
