export const sortArr = (arr, stat) =>
  [...arr].sort((a, b) => parseFloat(b[stat]) - parseFloat(a[stat]));
