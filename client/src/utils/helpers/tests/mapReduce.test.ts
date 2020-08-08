import { mapReduce } from '../mapReduce';

// export const mapReduce: Function = (arr: Array<{}>, stat: string): number =>
//   arr.map((elem) => +elem[stat]).reduce(getSum, 0);

test('should return 0 if array is empty', () => {
  const array = [];
  expect(mapReduce(array, 'any')).toBe(0);
});
