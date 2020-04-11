import React from 'react';
import { create } from 'react-test-renderer';
import { MemoryRouter } from 'react-router';
import Sidebar from './Sidebar';

describe('Sidebar', () => {
  const testRenderer = create(
    <MemoryRouter>
      <Sidebar collapsed={true} />
    </MemoryRouter>,
  );

  it('renders', () => {
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
