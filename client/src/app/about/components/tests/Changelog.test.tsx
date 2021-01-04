import React from 'react';
import { render } from '@testing-library/react';
import Changelog from '../Changelog';

const wrapper = render(<Changelog />);

describe('changelog tests', () => {
  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
