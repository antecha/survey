import React from 'react';
import { create } from 'react-test-renderer';
import AppHeader from './AppHeader';

describe('AppHeader', () => {
  const testRenderer = create(<AppHeader />);

  it('renders', () => {
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
