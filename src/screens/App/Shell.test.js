import React from 'react';
import { create } from 'react-test-renderer';
import Shell from './Shell';
import { MemoryRouter } from 'react-router';
import Header from './Header';

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
    testRenderer.root.findByType(Header).props.onIconClick();
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
