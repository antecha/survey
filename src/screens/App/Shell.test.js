import React from 'react';
import { create } from 'react-test-renderer';
import Shell from './Shell';
import { MemoryRouter } from 'react-router';

jest.mock('antd', _ => ({
  ...require.requireActual('antd'),
  Tabs: () => <div />,
}));

describe('Shell', () => {
  const testRenderer = create(
    <MemoryRouter>
      <Shell />
    </MemoryRouter>,
  );
  it('renders', () => {
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
