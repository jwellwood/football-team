export const getAvg = (stat, total, fix = 2) => {
  if (total === 0) return '0.00';
  return (stat / total).toFixed(fix);
};
