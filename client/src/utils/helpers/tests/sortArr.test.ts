import { sortArr } from '../sortArr';

// export const mapReduce: Function = (arr: Array<{}>, stat: string): number =>
//   arr.map((elem) => +elem[stat]).reduce(getSum, 0);

test('should return an empty arr if array is empty', () => {
  const array = [];
  expect(sortArr(array, 'any')).toStrictEqual([]);
});
