import React from 'react';
import { create } from 'react-test-renderer';
import Header from './Header';

describe('Header', () => {
  const testRenderer = create(<Header />);

  it('renders', () => {
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
