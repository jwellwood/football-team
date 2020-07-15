import { filterer } from '../filterer';

test('length to be 0 when passed empty array', () => {
  expect(filterer([], 'any')).toBe(0);
});
