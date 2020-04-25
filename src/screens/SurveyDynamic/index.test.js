import React from 'react';
import { create } from 'react-test-renderer';
import SurveyDynamic from './index';
import { otherQuestions } from './questionList';

describe('SurveyDynamic', () => {
  const testRenderer = create(<SurveyDynamic questionList={otherQuestions} />);

  it('renders', () => {
    testRenderer.root.findByType('form').props.onSubmit();
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
