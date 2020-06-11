export const getPercentage = (value, max, fix) => {
  const percentage = (value * 100) / max;
  if (isNaN(percentage)) return 0;
  return percentage.toFixed(fix);
};
