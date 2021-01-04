import { getThemeColorByType } from '..';
import { theme } from 'lib/theme';

describe('get theme color by type tests', () => {
  const {
    success,
    warning,
    error,
    secondary,
    goal,
    assist,
    conceded,
  } = theme.palette;
  test('should return transparent as default', () => {
    const background = '';
    const random = 'random';
    const number = 99;

    expect(getThemeColorByType()).toBe('transparent');
    expect(getThemeColorByType(background)).toBe('transparent');
    expect(getThemeColorByType(random)).toBe('transparent');
    expect(getThemeColorByType(number)).toBe('transparent');
  });
  test('should return warning as first', () => {
    expect(getThemeColorByType('first')).toBe(warning.main);
  });
  test('should return secondary as second', () => {
    expect(getThemeColorByType('second')).toBe(secondary.light);
  });
  test('should return warning as third', () => {
    expect(getThemeColorByType('third')).toBe(warning.dark);
  });
  test('should return secondary as secondary', () => {
    expect(getThemeColorByType('secondary')).toBe(secondary.light);
  });
  test('should return success as success', () => {
    expect(getThemeColorByType('success')).toBe(success.main);
  });
  test('should return warning as warning', () => {
    expect(getThemeColorByType('warning')).toBe(warning.main);
  });
  test('should return error as error', () => {
    expect(getThemeColorByType('error')).toBe(error.main);
  });
  test('should return goal as goal', () => {
    expect(getThemeColorByType('goal')).toBe(goal.main);
  });
  test('should return assist as assist', () => {
    expect(getThemeColorByType('assist')).toBe(assist.main);
  });
  test('should return conceded as conceded', () => {
    expect(getThemeColorByType('conceded')).toBe(conceded.main);
  });
});
