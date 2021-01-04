import { yearOptions } from '..';
import { base_year, max_year } from 'constants/data';

describe('year options tests', () => {
  test('should return an array when years are zero', () => {
    const base = 0;
    const max = 0;
    expect(yearOptions(base, max)).toStrictEqual([{ text: '0', value: 0 }]);
  });
  test('should return an array when years are equal', () => {
    const base = 2020;
    const max = 2020;
    expect(yearOptions(base, max)).toStrictEqual([
      { text: '2020', value: 2020 },
    ]);
  });
  test('should return an array of two when years are one year apart', () => {
    const base = 2020;
    const max = 2021;
    expect(yearOptions(base, max)).toHaveLength(2);
  });
  test('should return an array of 101 when years are 100 years apart', () => {
    const base = 2020;
    const max = 2120;
    expect(yearOptions(base, max)).toHaveLength(101);
  });
  test('should work even if args are not numbers', () => {
    const base = '2020';
    const max = '2020';
    expect(yearOptions(base, max)).toStrictEqual([
      { text: '2020', value: 2020 },
    ]);
  });
  test('should work even without args', () => {
    expect(yearOptions()).toHaveLength(max_year - base_year + 1);
  });
});
