import React from 'react';
import { create } from 'react-test-renderer';
import AppRoutes, { AppContent } from './AppRoutes';
import { MemoryRouter } from 'react-router';

jest.mock('antd', _ => ({
  ...require.requireActual('antd'),
  Tabs: () => <div />,
}));

describe('AppContent', () => {
  const testRenderer = create(
    <AppContent>
      <div />
    </AppContent>,
  );

  it('renders', () => {
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});

describe('AppRoutes', () => {
  const testRenderer = create(
    <MemoryRouter>
      <AppRoutes />,
    </MemoryRouter>,
  );

  it('renders', () => {
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
