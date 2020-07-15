export const mapper: Function = (arr: Array<{}>, stat: string) =>
  arr.map((elem) => elem[stat]);
