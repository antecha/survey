import React from 'react';
import { create } from 'react-test-renderer';
import SurveyStatic from './index';

describe('SurveyStatic', () => {
  const testRenderer = create(<SurveyStatic />);

  it('renders', () => {
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
