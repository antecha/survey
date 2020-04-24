import React from 'react';
import { create } from 'react-test-renderer';
import SurveyDynamic from './index';

describe('SurveyDynamic', () => {
  const testRenderer = create(<SurveyDynamic />);

  it('renders', () => {
    testRenderer.root.findByType('form').props.onSubmit();
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
