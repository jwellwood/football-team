import { parseDate } from '../date';

test('returns a formatted date', () => {
  const date = new Date();
  expect(parseDate('2020-07-14T21:51:41.056Z')).toBe('Jul 14 2020');
  expect(parseDate('2020-01-01T00:00:00.000Z')).toBe('Jan 01 2020');
  expect(parseDate(date)).toBeDefined();
});
