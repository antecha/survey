import React from 'react';
import { create } from 'react-test-renderer';
import Routes, { AppContent } from './Routes';
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

describe('Routes', () => {
  const testRenderer = create(
    <MemoryRouter>
      <Routes />,
    </MemoryRouter>,
  );

  it('renders', () => {
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
