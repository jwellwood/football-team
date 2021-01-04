import { getThemeColorByNumber } from '..';
import { theme } from 'lib/theme';

describe('get theme color by number tests', () => {
  const { secondary, error, warning, success } = theme.palette;
  test('should return secondary as default case', () => {
    const num = null;
    const randomNum = 99;
    const randomString = '99';
    expect(getThemeColorByNumber(num)).toBe(secondary.main);
    expect(getThemeColorByNumber(randomNum)).toBe(secondary.main);
    expect(getThemeColorByNumber(randomString)).toBe(secondary.main);
  });
  test('should return error as 0 points case', () => {
    const num = 0;
    expect(getThemeColorByNumber(num)).toBe(error.main);
  });
  test('should return success as 3 points case', () => {
    const num = 3;
    expect(getThemeColorByNumber(num)).toBe(success.main);
  });
  test('should return warning as 1 point case', () => {
    const num = 1;
    expect(getThemeColorByNumber(num)).toBe(warning.main);
  });
  test('should work for strings', () => {
    const num = '1';
    expect(getThemeColorByNumber(num)).toBe(warning.main);
  });
});
