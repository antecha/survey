import React from 'react';
import { create } from 'react-test-renderer';
import App from './index';
import { MemoryRouter } from 'react-router';

jest.mock('antd', _ => ({
  ...require.requireActual('antd'),
  Tabs: () => <div />,
}));

describe('App', () => {
  const testRenderer = create(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );
  it('renders', () => {
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
