import React from 'react';
import { create } from 'react-test-renderer';
import { MemoryRouter } from 'react-router';
import AppMenu from './AppMenu';

describe('AppMenu', () => {
  const testRenderer = create(
    <MemoryRouter>
      <AppMenu collapsed={true} />
    </MemoryRouter>,
  );

  it('renders', () => {
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
