export const sortArr: Function = (arr: Array<[]>, stat: string): Array<[]> =>
  [...arr].sort((a, b) => parseFloat(b[stat]) - parseFloat(a[stat]));
