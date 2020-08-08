import { mapper } from '../mapper';

// export const mapper: Function = (arr: Array<{}>, stat: string) =>
//   arr.map((elem) => elem[stat]);

test('it returns an empty array when arr is empty', () => {
  const array = [];
  expect(mapper(array, 'any')).toStrictEqual([]);
});
