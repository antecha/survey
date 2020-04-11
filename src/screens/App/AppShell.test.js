import React from 'react';
import { create } from 'react-test-renderer';
import AppShell from './AppShell';
import { MemoryRouter } from 'react-router';

jest.mock('antd', _ => ({
  ...require.requireActual('antd'),
  Tabs: () => <div />,
}));

describe('AppShell', () => {
  const testRenderer = create(
    <MemoryRouter>
      <AppShell />
    </MemoryRouter>,
  );
  it('renders', () => {
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
