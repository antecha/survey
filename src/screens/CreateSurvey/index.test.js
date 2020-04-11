import React from 'react';
import { create } from 'react-test-renderer';
import CreateSurvey from './index';

jest.mock('antd', _ => ({
  ...require.requireActual('antd'),
  Tabs: () => <div />,
}));

describe('CreateSurvey', () => {
  const testRenderer = create(<CreateSurvey />);

  it('renders', () => {
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
