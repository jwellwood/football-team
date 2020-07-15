import { getAvg } from '../getAvg';

test('positive numbers', () => {
  expect(getAvg(3, 10)).toBe('0.30');
});
test('zeros', () => {
  expect(getAvg(0, 0)).toBe('0.00');
});
test('decimal numbers', () => {
  expect(getAvg(5.5, 10)).toBe('0.55');
});
test('negative numbers', () => {
  expect(getAvg(-1, 10)).toBe('-0.10');
});
