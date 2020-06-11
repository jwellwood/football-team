import { getSum } from './getSum';

export const mapReduce = (arr, stat) =>
  arr.map((elem) => +elem[stat]).reduce(getSum, 0);
