export const getPercentage = (value, max, fix) => {
  const percentage = (value * 100) / max;
  if (isNaN(percentage)) return 0;
  return percentage.toFixed(fix);
};

export const getSum = (total, num) => total + num;
export const mapper = (arr, stat) => arr.map((elem) => elem[stat]);
export const mapReduce = (arr, stat) =>
  arr.map((elem) => +elem[stat]).reduce(getSum, 0);
export const filterer = (arr, stat) => arr.filter((elem) => elem[stat]).length;
export const getMost = (arr) => (arr.length ? Math.max(...arr) : 0);
export const getFewest = (arr) => (arr.length ? Math.min(...arr) : 0);
export const sortArr = (arr, stat) =>
  [...arr].sort((a, b) => parseFloat(b[stat]) - parseFloat(a[stat]));

export const getAvg = (stat, total, fix = 2) => (stat / total).toFixed(fix);
